import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../servises/api";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const fetchProduk = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const isinya = { ...response?.data?.data?.product };
      console.log(isinya);
      setProduct(isinya || {});
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduk(param.id);
    }
  }, [param.id]);

  return (
    <>
      <div className="bg-slate-400 text-center">
        <Button type="primary" onClick={() => navigate(-1)}>
          Pulang
        </Button>
      </div>
      <div className="text-center">DetailProduct</div>
      <p>Nama Produk: {product?.name}</p>
      <p>Harga: {product?.price}</p>
      <p>Yang Jual: {product?.ownerId?.name}</p>
    </>
  );
};

export default DetailProduct;
