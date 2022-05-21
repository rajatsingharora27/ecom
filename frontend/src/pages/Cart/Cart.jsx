import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { mobile, tablet, large } from "../../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const TopButton = styled.button`
  background-color: white;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid teal;
  transition: all 0.5s ease;
  /* width: 12%; */
  font-weight: 600;
  margin: 2rem 0rem;

  &:hover {
    background-color: #3ea2a2;
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${large({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${large({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 20rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProcductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductAmount = styled.div`
  font-size: 2.4rem;
  margin: 2rem;

`;
const ProductPrice = styled.div`
  font-size: 2.4rem;
  font-weight: 200;
 
`;

const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: #eee;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
  font-size: 3rem;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "900"};
  font-size: ${(props) => (props.type === "total" ? "10rem" : "1.5rem")};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  background-color: white;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid teal;
  background-color: teal;
  width: 100%;
  transition: all 0.5s ease;
  color: black;

  &:hover {
    background-color: #3ea2a2;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Our Wishlist(0)</TopText>
          </TopTexts>
          <TopButton>Checkout Now</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image
                  src={
                    "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  }
                />

                <Details>
                  <ProductName>
                    Product:<b>Denim Jeans</b>
                  </ProductName>
                  <ProductID>
                    Product ID:<b>byef842nu329</b>
                  </ProductID>
                  <ProcductColor color="gray" />
                  <ProductSize>
                    Size:<b>L</b>
                  </ProductSize>
                </Details>
              </ProductDetails>

              <PriceDetails>
                <ProductAmountContainer>
                  <RemoveCircleOutlineIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddCircleOutlineIcon />
                </ProductAmountContainer>

                <ProductPrice>$40</ProductPrice>
              </PriceDetails>
            </Product>

            <Hr />

            <Product>
              <ProductDetails>
                <Image
                  src={
                    "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  }
                />

                <Details>
                  <ProductName>
                    Product:<b>Denim Jeans</b>
                  </ProductName>
                  <ProductID>
                    Product ID:<b>byef842nu329</b>
                  </ProductID>
                  <ProcductColor color="gray" />
                  <ProductSize>
                    Size:<b>L</b>
                  </ProductSize>
                </Details>
              </ProductDetails>

              <PriceDetails>
                <ProductAmountContainer>
                  <RemoveCircleOutlineIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddCircleOutlineIcon />
                </ProductAmountContainer>

                <ProductPrice>$40</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SUB-TOTAL</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>ESTEMATED SHIPPING</SummaryItemText>
              <SummaryItemPrice>$3</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>DISCOUNT</SummaryItemText>
              <SummaryItemPrice>$-5</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText type="total">TOTAL</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>

            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
