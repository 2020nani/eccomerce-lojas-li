import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center
  background: white;
 padding: 10px
 @media (max-width:520px) {
    flex-direction: column
   }
`;

export const Compras = styled.div`
width: 35%;
margin: 1%;
display: flex;
flex-direction: column;
@media (max-width:520px) {
    width: 100%
   }
h1{
    padding-top:4px
    text-align: center
    }
li{
    display: flex;
    justify-content: space-between
    margin-top: 20px;
}
span{
    font-size:14px;
    margin-top:20px
}
strong{
    margin-top:10px;
    font-size: 18px;
    font-weight: bold;
}
`;

export const Pagamento = styled.div`
background: lightgray
width:35%;
margin: 1%;
display: flex;
flex-direction: column;
@media (max-width:570px) {
    width:100%
   }
h1{
padding-top:4px
text-align: center
}
img{
    margin: 3%;
}
form{
    display: flex;
    flex-direction: column;
input{
    height:50px
    margin:1%;
} 
button{
    width: 100%;
    margin-top:40px;
    height:70px;
    background: skyblue
    
}
}

` ;