import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import Education from '../sections/Education';
import Employment from '../sections/Employment';
import Awards from '../sections/Awards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PRPublications from '../sections/Publications';
import PrPublications from '../sections/PrPublications';
import Licenses from '../sections/Licenses';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Education />
    <Employment />
    <Awards />
    <PRPublications />
    <PrPublications />
    <Licenses />
    <Footer />
  </Layout>
);

export default IndexPage;
