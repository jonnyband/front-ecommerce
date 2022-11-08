import styled from "styled-components";

export const Container = styled.div`
width: 80vh;
height: 2vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
background-color: gainsboro;
padding: 5vh;
border-radius: 4px;
border: 2px solid black;
margin: 2px;
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
    height: 3.5vh;
    width: 9vh;
    margin-left: 30vh;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    background-color: #F87060;

    cursor: pointer;
    :hover{
    opacity: 0.6;
    } 

}
`
