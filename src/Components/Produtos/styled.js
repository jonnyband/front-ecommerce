import styled from "styled-components";

export const Container = styled.div`
width: 80vh;
height: 20vh;
display: flex;
flex-direction: row;
background-color: #A1BDD0;
box-shadow: 0px -1px 8px 3px black;
padding: 5vh;
border-radius: 4px;
border: 2px solid d6edff;
margin: 12px;
font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;

img{
    height: 13vh;
    width: 13vh;
    border-radius: 4px;

}

h1{
    margin-top: 2px;
}

div{
    
    padding: 10px;
}

span{
    font-size: 1.15rem;
}

`

export const Div = styled.div`

button{
    height: 6vh;
    width: 15vh;
    margin-left: 20vh;
    margin-top: 1vh ;
    border: 2px solid black;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    background-color: #0E3B43;
    box-shadow: 0px 0px 3.5px 0.8px black;
    
    cursor: pointer;
    :hover{
    opacity: 0.9;
    }  
}
span{
    font-size: 2.5rem;
}
`;




