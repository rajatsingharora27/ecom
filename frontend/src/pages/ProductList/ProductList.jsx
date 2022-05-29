import React from "react";
import styled from "styled-components";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import { mobile,tablet } from "../../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 2rem;
`;
const FilterComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 2rem;
  ${mobile({width:"0px 20px",
    display:'flex',
    flexDirection:'column',
  })}
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;

const Select = styled.select`
  margin-left: 4px;
  ${mobile({margin:"10px 0px"})}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterComponent>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Pink</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>price(asce)</Option>
            <Option>price(desc)</Option>
          </Select>
        </Filter>
      </FilterComponent>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
