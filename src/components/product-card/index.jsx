import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({
  random,
  namaProduk,
  hargaProduk,
  produkKategori,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={
          <img
            alt="example"
            src={`https://picsum.photos/200?random=${random}`}
          />
        }
      >
        <Meta
          title={namaProduk}
          description={
            <div>
              <div className="ant-card-meta-category">{produkKategori}</div>
              <div className="ant-card-meta-price">Rp. {hargaProduk}</div>
            </div>
          }
        />

        <div className="text-center mt-6">
          <Button
            className="text-center"
            type="primary"
            onClick={() => navigate(`/detail-product/${onClick}`)}
          >
            {" "}
            Detail Produk{" "}
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
