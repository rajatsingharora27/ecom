import React from 'react';
import styled from "styled-components";
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';



const Categoty =styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

`;



const Category = () => {
  return (
    <Categoty>
        {categories.map((item)=>(<CategoryItem item={item} key={item.id}/>))}
    </Categoty>
  )
}

export default Category