import React, { useState, useEffect } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../servises/api";

const HomePage = () => {
  const [produk, setProduk] = useState([]);
  const [kota, setKota] = useState([]);

  const fetchKota = async () => {
    try {
      const url = "/api/v1/city";
      const response = await api.get(url);
      const payload = [...response?.data?.data?.cities];
      console.log(payload);
      setKota(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  const fetchProduk = async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
      const isinya = [...response.data.data.products];
      console.log(isinya);
      setProduk(isinya);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchKota();
    fetchProduk();
  }, []);

  return (
    <>
      <Banner />
      <h1 className="text-center">Kota</h1>
      <div className=" bg-primary text-white text-center grid grid-cols-5 gap-4 m-5 rounded-full">
        {kota.map((item) => {
          return <p key={item?.id}>{item?.name || "ga ada"}</p>;
        })}
      </div>

      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {produk.map((item) => (
          <ProductCard
            key={item.id}
            namaProduk={item.name}
            produkKategori={item.categoryId.name}
            hargaProduk={item.price}
            random={Math.random()}
            onClick={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
