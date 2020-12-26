import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | NodeBird</title>
      </Head>
      <AppLayout>Hello, Next!!</AppLayout>
    </>
  );
};

export default Home;
