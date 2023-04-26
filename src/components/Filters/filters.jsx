import React from "react";
import Filter from "../filter/filter";
import CheckboxFilter from "../checkboxFilter/CheckboxFilter";

import "./filters.styles.scss";

const Filters = ({ collections, setFilteredCollection }) => {
  const supplierList = [
    ...new Set(collections.map((collection) => collection.supplierName)),
  ];

  const sareeFabricList = [
    ...new Set(collections.map((collection) => collection.sareeFabric)),
  ];
  console.log(supplierList);

  const sortByFilterValues = [
    "Name (Ascending)",
    "Price High to Low",
    "Price Low to High",
    "Rating High to Low",
  ];

  const handleFilterChange = (filterName, filterValue = "") => {
    if (filterName === "Suppliers")
      setFilteredCollection(
        collections.filter((collection) =>
          collection.supplierName.includes(filterValue)
        )
      );
    else if (filterName === "Saree Fabric")
      setFilteredCollection(
        collections.filter((collection) =>
          collection.sareeFabric.includes(filterValue)
        )
      );
    else if (filterValue === "Price Low to High")
      setFilteredCollection(
        collections.toSorted(
          (a, b) => parseFloat(a.listingPrice) - parseFloat(b.listingPrice)
        )
      );
    else if (filterValue === "Price High to Low")
      setFilteredCollection(
        collections.toSorted(
          (a, b) => parseFloat(b.listingPrice) - parseFloat(a.listingPrice)
        )
      );
    else if (filterValue === "Name (Ascending)")
      setFilteredCollection(
        collections.toSorted((a, b) => a.name.localeCompare(b.name))
      );
    else if (filterValue === "Name (Ascending)")
      setFilteredCollection(
        collections.toSorted((a, b) => a.name.localeCompare(b.name))
      );
    else if (filterValue === "Name (Ascending)")
      setFilteredCollection(
        collections.toSorted((a, b) => a.name.localeCompare(b.name))
      );
    else if (filterName === "Sareemall" || filterName === "Saree Shop")
      setFilteredCollection(
        collections.filter((collection) =>
          collection.supplierName.includes(filterName)
        )
      );
    else setFilteredCollection(collections);
  };

  return (
    <div className="filters-container">
      <div className="container">
        <div className="left">
          <Filter
            filterName="Suppliers"
            filterValues={supplierList}
            onFilterChange={handleFilterChange}
          />
          <Filter
            filterName="Saree Fabric"
            filterValues={sareeFabricList}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="right">
          <Filter
            filterName="Sort By"
            width="210"
            filterValues={sortByFilterValues}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="checkbox-filter-container">
        <CheckboxFilter
          filterName="Sareemall"
          onFilterChange={handleFilterChange}
        />
        <CheckboxFilter
          filterName="Saree Shop"
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filters;
