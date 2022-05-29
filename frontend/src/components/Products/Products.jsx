import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";

const Container = styled.div`
  padding: 20px;
  /* margin: 30px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Heading=styled.h2`
    padding: 20px 0;
    /* background: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-decoration: underline;
`;


function Products() {
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
