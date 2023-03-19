import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width:100vw;
margin:0;
height:18vh;
background: #F2E6E6;
display:flex;
align-items:center
font-family: Arial, Helvetica, sans-serif;
a:{
  text-decoration: none;
  color: black
}
a:hover {
  text-decoration: underline;
  color: blue
  transiction-color: 100ms
}
`;

export const ContainerGrid = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  img {
    width: 25%;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const ContainerGridMenu = styled.div`
  width: 90vw;
  display: none;
  justify-content: space-between;
  @media (max-width: 650px) {
    display: flex;
    margin-top: 5px;
    img {
      width: 30%;
    }
  }
`;
export const ContainerGridConteudo = styled.div`
  flex: ${props => props.size}
  align-items: center;
  display: flex;
  justify-content: ${props => props.align};
`;


export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin: 0 10px 0 0;
  @media (max-width:500px) {
    flex-direction: column 
    svg{
      width: 30px
    }
  }
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    margin-left: 2px;
    @media (max-width:500px) {
      margin: 0; 
    }
    strong {
      display: block;
      color: #000;
      padding: 2px
      @media (max-width:500px) {
        font-size: 12px 
      }
    }
    span {
      font-size: 12px;
      color: black;
      padding: 2px;
      @media (max-width:500px) {
        font-size: 10px 
      }
    }
  }
`;

export const Button = styled.div `
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
button{
  background: none;
  border: none;
  color: black;
  font-size: 16px
  @media (max-width:500px) {
    font-size:10px  
  }
}
`