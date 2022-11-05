import styled from "styled-components";

export const Container = styled.div`
width: 80vh;
height: 20vh;
display: flex;
flex-direction: row;
background-color: gainsboro;
padding: 5vh;
border-radius: 4px;
border: 2px solid black;
margin: 2px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

img{
    height: 20vh;
    width: 20vh;
    border-radius: 4px;

}

h1{
    margin-top: 0;
}

div{
    
    padding: 10px;
}

`

export const Div = styled.div`
text-align: end;

button{
    height: 6vh;
    width: 15vh;
    margin-left: 30vh;
    margin-top: 7vh ;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    background-color: #3BB273;
    
    cursor: pointer;
    :hover{
    opacity: 0.9;
    }  
}
span{
    font-size: 2.5rem;
}
`;


