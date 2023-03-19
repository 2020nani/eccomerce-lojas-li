import styled from "styled-components";

export const Container = styled.div`
width:100vw;
margin:0;
height:100vh;
background: skyblue;
display:flex;
flex-direction: column;
justify-content: space-between;
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
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const ContainerGridMenu = styled.div`
  background: #F2E6E6;
  width: 20vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    display: flex;
    margin-top: 5px;
    img {
      width: 30%;
    }
  }
`;

export const ContainerGridConteudo = styled.div`
  background: transparent !important;
  width: 75vw;
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 650px) {
    display: flex;
    margin-top: 5px;
    img {
      width: 30%;
    }
  }`

  export const ButtonMenu = styled.button`
   font-weight: bold;
   font-size: 1.5rem;
   margin: 1vw 5px 5px 1vw;
   border: 0;
   border-radius: 4px;
   transition: background 0.2s;
   &:hover {
    background: green;
   }
   width: 18vw;
   height: 10vh;
  `