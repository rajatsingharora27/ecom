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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({width:'70%'})}
`;

const Button = styled.button`
  background-color: white;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid teal;
  transition: all 0.5s ease;
  width: 40%;
  font-weight: 600;
  margin: 2rem 0rem;

  &:hover {
    background-color: #3ea2a2;
  }
`;

const Link = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  margin: 1rem 0rem;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <Button>Log in</Button>
          <Link>Forgot Password? </Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
