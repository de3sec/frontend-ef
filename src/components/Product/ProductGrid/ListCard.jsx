const ListCard = (props) => {
  const { flexType, productData } = props;

  return (
    <div
      className={
        flexType === "flex-col"
          ? "card bg-white text-gray-700 min-h-[10rem] border overflow-hidden lg:w-72 md:w-72"
          : "card bg-white text-gray-700 border overflow-hidden"
      }
    >
      <div className={`flex ${flexType}`}>
        <div className="product-image p-2">
          {flexType === "flex-row" ? (
            <div class="relative w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0">
              <div class="absolute w-full h-full flex items-center justify-center">
                <img
                  alt="Placeholder"
                  class="absolute w-full object-contain object-center"
                  src={productData.image[0].url}
                ></img>
              </div>
            </div>
          ) : (
            <img
              // style={"height: 271px; width:100%; object-fit:contain"}
              className="w-full object-contain h-72"
              src={productData.image[0].url}
              alt=""
            ></img>
          )}
        </div>
        <div className="p-4 flex flex-col gap-3 grow">
          <h2 className="product-title font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
            <p>{productData.pname}</p>
          </h2>

          <div>
            <span className="text-xl font-bold">₹ {productData.pprice}</span>
            {/* <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">₹ 2000</span>
              <span className="discount-percent bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
                save 20%
              </span>
            </div> */}
          </div>

          <div className="mt-4 flex gap-2">
            <button className="button-primary md:w-full md:mt-9 px-6 py-2 rounded-md text-white font-medium tracking-wider transition bg-yellow-500/80">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
