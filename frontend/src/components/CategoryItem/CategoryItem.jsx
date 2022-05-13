import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; ;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;


const Title = styled.h2`
    color:white;
    margin-bottom: 20px;

`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid #af8e8e ;
    cursor: pointer;

    &:hover{
        border: 2px solid #af8e8e;
        background-color: white;
        color: black;
        opacity: 0.5;
        transition: all 0.5s ease-out;

    }

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
      
    </Container>
  );
};

export default CategoryItem;
