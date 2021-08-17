import React from 'react';
import Head from 'next/head';

function IndexHead() {
  return (
    <>
      <Head>
        <title>Carol Andrade</title>
        <meta name="description" content="Portfolio" />
        <meta name="author" content="Carol Andrade Santos" />
        <meta name="keywords" content="Next.js, JAMStack, React, Portfolio" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Portfolio Carol Andrade Santos" />
                <meta property="og:image" content="" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                <meta property="og:description" content="Vem conferir meu portfolio!" /> */}

        <link rel="icon" sizes="32x32" href="https://i.postimg.cc/d3N0xSw0/logo-1.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;600;800&display=swap" rel="stylesheet" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;400;600;700&display=swap" rel="stylesheet" /> */}
      </Head>
    </>
  );
}

export default IndexHead;
