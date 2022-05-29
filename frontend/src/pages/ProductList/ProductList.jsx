import React,{useState} from "react";
import styled from "styled-components";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import {useLocation } from 'react-router-dom';
import { mobile} from "../../Responsive";

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

  

  const location=useLocation();
  const cat=location.pathname.split('/')[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState('Newest')

  const handleFilters=(event)=>{
    const value=event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    })
  } 
  console.log(filters);



  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterComponent>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled defaultValue>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Pink</Option>
            <Option>Black</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled defaultValue>
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
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option defaultValue value="newest">Newest</Option>
            <Option value="asc">price(asce)</Option>
            <Option value="desc">price(desc)</Option>
          </Select>
        </Filter>
      </FilterComponent>
      <Products cat={cat} filter={filters}  sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
