import styled from 'styled-components';


export const Container = styled.div`
width: 70%;
height: 50vh;
margin-top: 15vh;
margin-left: 15%;
display: flex;
justify-content: center;
align-items: center;
background: white
@media (max-width:600px) {
    width:100%;
    margin-left: 0;
    padding: 10px
   }
`;
export const Conteudo = styled.div`
display: flex;
flex-direction: column
text-align: center
p{
    font-size:1.2rem
}
button{
    width: 100px;
    margin-top:2vh;
    align-self: center
}
`