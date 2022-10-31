import React from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const ProductCard = ({ product }) => {
  return (
    <>
      {/* <div className="card bg-white text-gray-700 w-72 border overflow-hidden">
        <div className="product-image">
          <img
            className="px-5 pt-3 pb-2"
            src={productData?.image[0].url}
            alt=""
          ></img>
        </div>

        <div className="px-5 pb-4 flex flex-col gap-3">
          <span>Brand Name</span>
          <h2 className="product-title font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
            <p>Product Name</p>
          </h2>

          <div>
            <span className="text-xl font-bold">₹ 4000</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">₹ 2000</span>
              <span className="discount-percent bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
                save 20%
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="button-primary w-full px-6 py-2 rounded-md text-white font-medium tracking-wider transition bg-yellow-500/80">
              Add to cart
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex p-10 items-center justify-items-center h-full">
        <a
          key={product._id}
          href={`/product/${product._id}`}
          className="border w-full p-3 md:p-2 border-transparent rounded-md shadow-sm bg-beige"
        >
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-8 xl:aspect-h-7">
            <img
              src={product.image[0].url}
              alt={product.pname}
              className="absolute w-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col items-start justify-items-center px-3">
            <h3 className="text-sm text-gray-700 my-2">{product.pname}</h3>
            <p className="text-xl my-1 text-blue font-medium text-gray-900">
              ₹{product.pprice}
            </p>
            {product.aprice && (
              <p className="mt-1 text-xs line-through text-blue font-medium text-gray-900">
                ₹{product.aprice}
              </p>
            )}
            <span className="text-black bg-white p-2 items-center justify-center w-full text-sm inline-flex my-2 border">
              <small className="uppercase text-sm text-blue">
                View Product
              </small>
              <span>
                <ArrowCircleRightIcon className="h-4 w-4 mx-1 mb-1 text-blue"></ArrowCircleRightIcon>
              </span>
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProductCard;
