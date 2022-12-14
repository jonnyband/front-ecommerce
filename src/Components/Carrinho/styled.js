import styled from "styled-components";

export const Container = styled.div`
width: 80vh;
height: 2vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
background-color: #A1BDD0;
box-shadow: 0px 0px 7px 1px black;
padding: 6vh;
border-radius: 4px;
border: 2px solid black;
margin: 18px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

img{
    height: 10vh;
    width: 10vh;
    border-radius: 4px;
}

h1{
    margin-top: 0;
}

h3{
    padding: 1vh;
}

button{
    height: 4.5vh;
    width: 8vh;
    margin-left: 20vh;
    margin-top: 2vh ;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    font-size: 1.05rem;
    background-color: #0E3B43;
    box-shadow: 0px 0px 3.5px 0.9px black;
    
    cursor: pointer;
    :hover{
    opacity: 0.8;
    }  
}
`
export const Div = styled.div`
button{
    height: 6vh;
    width: 10vh;
    margin-left: 2vh;
    margin-top: 2vh ;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    font-size: 1.05rem;
    background-color: #0E3B43;
    box-shadow: 0px 0px 3.5px 0.9px black;
    
    cursor: pointer;
    :hover{
    opacity: 0.8;
    }  
}
    h1{
        padding-left: 1.6vh;
        padding-top: 1vh;
    }
`;

