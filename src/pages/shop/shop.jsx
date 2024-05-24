import React, { useContext, useState } from "react";
import { Product } from "./product";
import "./shop.css";
import { FilterItem } from "../../components/filter/filter";
import { PRODUCTS } from "../../products";

export const Shop = () => {
  const [category, setcategory] = useState("All");
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
        <FilterItem category={category} setcategory={setcategory} />
      </div>

      <div className="products flex flex-wrap gap-[60px]  justify-center p-[25px]">
        {PRODUCTS.map((product, index) => {
          if (category === "All" || category === product.category) {
            return <Product key={index} data={product} />;
          }
        })}
      </div>
    </div>
  );
};
