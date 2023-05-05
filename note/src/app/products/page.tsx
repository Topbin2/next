import { getProducts } from "@/service/products";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
