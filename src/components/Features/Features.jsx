import React from "react";

import f1 from "../../assets/best-seller.jpg";
import f2 from "../../assets/chanderi.jpg";
import f3 from "../../assets/georgette.jpg";
import f4 from "../../assets/linen.jpg";
import f5 from "../../assets/organza.jpg";
import f6 from "../../assets/silk.jpg";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features">
      <img className="feature-img" src={f1} alt="saree" />
      <img className="feature-img" src={f2} alt="saree" />
      <img className="feature-img" src={f3} alt="saree" />
      <img className="feature-img" src={f4} alt="saree" />
      <img className="feature-img" src={f5} alt="saree" />
      <img className="feature-img" src={f6} alt="saree" />
    </div>
  );
};

export default Features;
