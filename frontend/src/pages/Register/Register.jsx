import React from "react";
import styled from "styled-components";
import {mobile} from '../../Responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`

  padding: 5rem;
  width: 40%;
  background-color: white;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  ${mobile({width:'75%'})}
  
`;
const Title = styled.h2`
    font-size: 26px;
    font-weight: 500;

`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.p`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    background-color: white;
  cursor: pointer;
  padding:1rem;
  border:1px solid teal;
  transition: all 0.5s ease;
  width: 40%;
  font-weight:600;

  &:hover{
    background-color: #3ea2a2;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            ratione possimus voluptate facilis, eveniet consequatur beatae
            tempora delectus tempore atque.
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
