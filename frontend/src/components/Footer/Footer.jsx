import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
  height: 25vh;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-weight: 800;
  font-size: 3rem;
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  font-size: 1.3rem;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 1.3rem;
`;
const Payment = styled.img`
 width: 50%;
 margin-left: 25%;
`;

const Logo = styled.h2`
  font-weight: 800;
  cursor: pointer;
  font-size: 3rem;
  margin: 1rem;
  padding-top: 1rem;
`;
const Desc = styled.p``;
const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SocialIcon = styled.div`
  margin: 2rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          assumenda totam quam neque.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" >
            <FacebookIcon style={{width:"30px"}}  />
          </SocialIcon>
          <SocialIcon color="E4405F" >
            <InstagramIcon style={{width:"30px"}}  />
          </SocialIcon>
          <SocialIcon color="55ACEE" >
            <TwitterIcon  style={{width:"30px"}} />
          </SocialIcon>
          <SocialIcon color="3B5999" >
            <LinkedInIcon  style={{width:"30px"}} />
          </SocialIcon>
          <SocialIcon color="DC143C" >
            <PinterestIcon  style={{width:"30px"}} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
