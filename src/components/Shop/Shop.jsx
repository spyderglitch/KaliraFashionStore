import { useState } from "react";

import { collections } from "../../data/collections"
import Products from "../Products/Products";
import "./Shop.scss";
import Filters from "../Filters/filters";
const Shop = () => {
  const [filteredCollection, setFilteredCollection] = useState(collections);

  return (
    <div className="shop-container">
      <Filters collections={collections} setFilteredCollection={setFilteredCollection} />
      <Products collections={filteredCollection}  />
    </div>
  );
};

export default Shop;
