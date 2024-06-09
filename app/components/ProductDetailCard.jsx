"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function ProductDetailCard(props) {
  function handleBuy(){
    console.log("buying product: ", props.product);
    // send to server for purchase, then redirect to success page or error page if failed
    
    
    }
    
    const router = useRouter();
    const { id, title, price, description, category, image, rating } = props;
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold text-gray-900">
              {title}
            </h1>
            <div className="text-lg font-semibold text-black-500"> $ {price}</div>
            <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              {/* Add more size options */}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900" type="button">
                Add to cart
              </button>
            </div>
            <div className="flex-auto flex space-x-4">
              <button onClick={handleBuy} className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900" type="button">
                Buy
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Favorites">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">Free shipping</p>
        </form>
      </div>
    </div>
      );
    }