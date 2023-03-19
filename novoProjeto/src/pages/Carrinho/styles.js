import styled from "styled-components";

export const Container = styled.div`
padding: 30px;
background: #fff;
border-radius: 4px;
@media (max-width:570px) {
   padding: 0;
   width:100%
  }
footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

button {
    width:200px;
    background: skyblue;
    color: black;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    @media (max-width:570px) {
        width:100px
       }
    &:hover {
        background: yellow
    }
}
}

`;

export const TabelaJogo = styled.table`
width: 100%;

thead th {
    color: #999;
    text-align: left;
    padding: 12px
}

tbody td{
    padding: 12px;
    border-bottom: 1px solid #eee;
    @media (max-width:570px) {
        padding:2px
       }
}
img {
    height: 100px
    @media (max-width:570px) {
        width:70px
       }
}

strong {
    color: #333;
    display: block
    @media (max-width:570px) {
        font-size: 14px
       }
} 

span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width:570px) {
        font-size: 10px
       }
}

div {
    display: flex;
    align-items: center;

    input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px
        @media (max-width:570px) {
            width:20px
           }
    }
}
button {
    background: none;
    border: 0;
    padding: 6px
    @media (max-width:570px) {
        padding: 0
       }
}
`;

export const Total = styled.div`
display: flex;
align-items: baseline;

span {
    color: #999;
    font-weight: bold
}
strong {
    font-size: 28px;
    margin-left: 5px;
    @media (max-width:570px) {
        font-size: 14px
       }
}
`