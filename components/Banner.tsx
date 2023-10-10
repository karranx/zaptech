import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">ZapTech</h1>
        <h2 className="mt-5 md:mt-2">Welcome to your favourite blog</h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product Features | The Latest In Tech | The Weekly Debugging
        Nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
