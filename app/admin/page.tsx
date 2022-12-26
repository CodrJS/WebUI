"use client";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Codr</title>
        <meta name="description" content="Codr Web UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        
      </div>
    </>
  );
};

export default Home;
