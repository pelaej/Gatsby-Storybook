const fetch = require("node-fetch");
const queryString = require("query-string");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, configOptions) => {
  
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  const { createNode } = actions

  const apiHeaders = configOptions.headers;

  // Helper function that processes a product to match Gatsby's node structure
  const processProduct = product => {
    const nodeId = createNodeId(`${product.id}`)
    const nodeContent = JSON.stringify(product)
    const nodeData = Object.assign({}, product, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `product_${product.attributes.url_path}`,
        content: nodeContent,
        contentDigest: createContentDigest(product),
      },
    })

    return nodeData
  }

  // Fetch product data
  async function getProductData(apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Accept': apiHeaders.Accept,
          'Accept-Language': apiHeaders.AcceptLanguage
        }
      });
      let result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // Get list of products
  const products = await getProductData(`${configOptions.url}/products`);

  const items = [];

  // Loop through products, fetch individual product data and add to items array
  const productNodes = await products.map(async (product, key) => {
    if (key < 10) {
      // fetch product data
      const data = await getProductData(`${configOptions.url}/products/${product.id}?includes=variants`);
      
      // process data for Gatsby's node structure
      const node = await processProduct(data.data);
      
      // create Gatsby node
      items.push(createNode(await node));
    }
  });

  // wait for all fetching to complete, then return array of product nodes
  await Promise.all(productNodes).then(() => items);

}