import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./card.styles.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, mrp, listingPrice, discount, primaryImage } = product;
  const navigate = useNavigate();
  return (
    <Card
      key={id}
      sx={{ maxWidth: 250 }}
      className="card-container"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          className="card-image"
          component="img"
          height="340"
          src={primaryImage.webpImages.mImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Rs {listingPrice}</span>{" "}
            <span style={{ textDecoration: "line-through" }}>{mrp}</span>{" "}
            <span style={{ color: "orange" }}>(${discount}% OFF)</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;

{
  /* <div className="product-card-container">
      <img src={primaryImage.webpImages.mImage} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{mrp}</span>
      </div>
    </div> */
}
