import React, { useEffect, useState } from "react";
import "./ProductDesc.scss";
import { useParams } from "react-router-dom";
import { collections } from "../../data/collections";

import { Typography } from "@mui/material";

//image are undefined  passed as props but not present

const ProductDesc = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState("mImage");
  const [productDetails, setProductDetails] = useState();
  const [quantity, setQuantity] = useState(1);
  const p = useParams(); // use this id to show data

  const getProductDetailsId = (id) => {
    let details = collections?.filter((product) => product.id == id);
    console.log("details", details);
    setProductDetails(...details);
  };

  // useEffect(() => {
  //   getProductDetailsId(id);
  // }, [id]);

  console.log("productDetails", p);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={productDetails?.primaryImage?.jpegImages?.xsImage}
            alt=""
            onClick={() => setSelectedImage("xsImage")}
          />
          <img
            src={productDetails?.primaryImage?.jpegImages?.sImage}
            alt=""
            onClick={() => setSelectedImage("sImage")}
          />
          <img
            src={productDetails?.primaryImage?.jpegImages?.mImage}
            alt=""
            onClick={() => setSelectedImage("mImage")}
          />
          <img
            src={productDetails?.primaryImage?.jpegImages?.lImage}
            alt=""
            onClick={() => setSelectedImage("lImage")}
          />
          {/* <img src={images[1]} alt="" onClick={() => setSelectedImage(1)} /> */}
        </div>
        <div className="mainImg">
          <img src={productDetails?.primaryImage?.webpImages?.sImage} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{productDetails?.name}</h1>
        <Typography variant="body2" color="text.secondary">
          <span className="price" style={{ fontWeight: "bold" }}>
            {productDetails?.listingPrice
              ? `Rs. ${productDetails?.listingPrice}`
              : "-"}
          </span>{" "}
          <span className="price" style={{ textDecoration: "line-through" }}>
            {productDetails?.mrp ? `Rs. ${productDetails?.mrp}  ` : "-"}
          </span>{" "}
          <span className="price" style={{ color: "#f43cb4" }}>
            ({productDetails?.discount ? productDetails?.discount : "-"}% OFF)
          </span>
        </Typography>
        <p
          style={{
            color: "black",
          }}
        >
          <div>
            {productDetails?.blouseAttached
              ? `Blouse Attached- ${productDetails?.blouseAttached}`
              : "-"}
          </div>
          <div>
            {productDetails?.blouseFabric
              ? `Blouse Fabric- ${productDetails?.blouseFabric}`
              : "-"}
          </div>
          <div>
            {productDetails?.sareeFabric
              ? `Saree Fabric- ${productDetails?.sareeFabric}`
              : "-"}
          </div>
          <div>
            {productDetails?.supplierName
              ? `Supplier- ${productDetails?.supplierName}`
              : "-"}
          </div>
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDesc;
