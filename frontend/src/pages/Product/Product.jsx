import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import{mobile,tablet,large} from '../../Responsive';




const Container = styled.div``;
const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
${mobile({flexDirection:'column',padding:'10px'})}
${tablet({flexDirection:'column',padding:'10px'})}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:'40vh'})}
  ${tablet({height:'50vh'})}
  ${large({height:'50vh'})}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 4rem;
  ${mobile({padding:'10px'})}
`;
const Title = styled.h2`
  font-weight: 800;
  font-size: medium;
  ${mobile({fontSize:'20px',fontWeight:'600'})}
  ${tablet({fontSize:'30px',fontWeight:'800'})}
`;
const Desc = styled.p`
  font-size: 2rem;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({width:'100%'})}
  ${tablet({width:'100%'})}
  ${large({width:'100%'})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSizeOptions = styled.option``;

const AddContainer=styled.div`

  width: 50%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:'100%'})}
  ${tablet({width:'100%'})}
  ${large({width:'100%'})}

`;

const AmountContainer=styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

`;

const Amount =styled.span`

  width: 30px;
  height:30px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 1rem;


`;

const Button=styled.button`

  background-color: white;
  cursor: pointer;
  padding:1rem;
  border:1px solid teal;
  border-radius: 5px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #3ea2a2;
  }


`;



const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImageContainer>
          <Image src={"https://i.ibb.co/S6qMxwr/jean.jpg"} />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            molestiae laboriosam quod, doloribus repellat dolore veritatis ad
            aliquam iure deserunt corporis provident sed sit qui. Dignissimos
            modi quas architecto totam.
          </Desc>
          <Price>$200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="pink" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize>
                <FilterSizeOptions>Xs</FilterSizeOptions>
                <FilterSizeOptions>S</FilterSizeOptions>
                <FilterSizeOptions>L</FilterSizeOptions>
                <FilterSizeOptions>XL</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>

            <AmountContainer>
              <RemoveCircleOutlineIcon style={{fontSize:"2.5rem",cursor:"pointer"}} />
              <Amount>1</Amount>
              <AddCircleOutlineIcon style={{fontSize:"2.5rem",cursor:"pointer"} } />
            </AmountContainer>
            <Button>Add To Cart</Button>

          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
