import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  /* margin: 30px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Heading = styled.h2`
  padding: 20px 0;
  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: underline;
`;

function Products({ cat, filter, sort }) {
  // console.log(cat,filter,sort);

  // const [products, setProducts] = useState([]);
  // const [filterdProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/product/?category=${cat}`
            : "http://localhost:8000/api/product/"
        );
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  return (
    <>
      <Heading>Our Wide Range of Products</Heading>
      <Container>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
}

export default Products;
