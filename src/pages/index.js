import React from "react";

import Layout from '../components/layouts/layout';
import TextBox from '../components/text-box/text-box';
import ProductSetcard from '../components/cards/productSetcard';
import Heading from '../components/headings/heading';

const Index = () => (
  <Layout>
    <TextBox />
    <section className="section-wrapper section-inner">
      <Heading level="h3" styles="din-2014">Comparable Products</Heading>
      <ProductSetcard />
    </section>
  </Layout>
)

export default Index;