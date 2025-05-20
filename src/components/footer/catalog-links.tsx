const CatalogLinks = () => {
  return (
    <div className="flex flex-row justify-start space-x-8 font-satoshi text-[28px] capitalize">
      <div className="flex flex-col space-y-3">
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Home
          <div className="-mt-4 h-3 w-full origin-left scale-x-100 bg-alinsky-medium-slate-blue/50 transition-transform duration-300" />
        </span>
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Pricing
          <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Products
          <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </div>
      <div className="flex flex-col space-y-3">
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Contact Us
          <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Tutorial
          <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
        <span className="group mb-4 inline-block w-fit cursor-pointer">
          Blog
          <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </div>
    </div>
  );
};

export default CatalogLinks;
