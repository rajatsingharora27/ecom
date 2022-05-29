import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";




const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cceacccb;

  &:hover ${Info} {
    transition: all 0.3s ease;
    opacity: 1;
  }

`;

const Circle = styled.div`
/* width:200px;
height:200px;
border-radius:50%;
background: white;
position: absolute; */

`;

const Image = styled.img`
  height: 20rem;
  z-index: 2;
`;



const Icon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #c7b2b2;
        transform: scale(1.1);
    }

`;

// const link=https://source.unsplash.com/1600x900/?trouser,shirt;

function Product({ item }) {
  return (
    <Container>
      <Circle>
        <Image src={item.img} alt={"No imgage"} />
        <Info>
          <Icon>
            <ShoppingCartIcon />
          </Icon>
          <Icon>
            <SearchIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Circle>
    </Container>
  );
}

export default Product;
