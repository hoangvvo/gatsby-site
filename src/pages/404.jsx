import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="w-full text-center px-2 py-64 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold uppercase">Not found</h1>
      <p className="py-1 text-lg text-accents-600 mb-8">
        This page does not exist... just like my girlfriend.
      </p>
      <Link
        className="transition-all ease-in-out duration-200 opacity-75 bg-accents-100 transform hover:translate-y-1 font-bold py-2 px-4 shadow-md rounded"
        to="/"
      >
        Come back home
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
