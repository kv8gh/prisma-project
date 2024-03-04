"use client"
import React from "react";
import Link from "next/link";

export default function Card(props) {
    
    const { id, title, price, description, category, image, rating } = props;

    
    return (
        <Link href={`/products/${id}`} className=" h-fit p-4 w-48 min-w-lg border border-gray-200 rounded-lg shadow-sm bg-gray-400 dark:border-gray-700 grid-col-4">
            <img src={image} alt={title} className="card--image p-3 mx-auto rounded" />
            {/* <div className="card--content "> */}
                <p className="card--title text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</p>
                <p className="card--category">{category}</p>
                {/* <p className="card--description">{description}</p> */}
                <p className="card--price">Price: ${price}</p>
                <div className="card--rating">
                    Rating: {rating.rate} ({rating.count} reviews)
                </div>
            {/* </div> */}
        </Link>
    );
}
