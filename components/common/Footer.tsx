import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center">
            <Image
              src={'https://cp-site-assets.s3.us-east-1.amazonaws.com/images/cp_logo.png'}
              alt="CloudPositive Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="text-primary text-2xl font-bold">Cloud Positive</span>
          </div>
          <p className="text-xs text-gray-500">
            &copy; 2024. CloudPositive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
