import styled from "styled-components";


export const Container=styled.div`
display: flex;
flex-direction: column;
background-color: #A1BDD0;
width: 30vh;
height: 80vh;
margin: auto;
margin-top: 10vh;       
box-shadow: 0px -1px 8px 3px black;



h1{
    padding:2vh;
    color: black;
}

h4{padding:2vh;
color: black;
}

button{
    height: 4vh;
    width: 15vh;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    font-size: 1.05rem;
    background-color: #0E3B43;
    box-shadow: 0px 0px 3.5px 0.9px black;
    margin-left: 7vh;
    margin-top: 1.5vh;
    
    cursor: pointer;
    :hover{
    opacity: 0.8;
    }  
}

`