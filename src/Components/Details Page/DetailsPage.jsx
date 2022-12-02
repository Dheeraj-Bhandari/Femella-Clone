import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { productid } = useParams();
  console.log(productid);
  useEffect(() => {
    fetch(
      `https://smartnav.maker.co/api/get_products?product_ids=${productid}&in_stock=true&store_id=623d4113c4dcc20004e6d187`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
