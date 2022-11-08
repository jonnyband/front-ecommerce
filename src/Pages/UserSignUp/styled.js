import styled from "styled-components";

export const Container= styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #015958;
font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;


form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black  ;
    padding-bottom: 2vh;
}
label{
    padding: 3vh;
    font-size: 1.5rem;
    color: white;
    
}
input{
    padding: 1.5vh;
    font-size: 1.2rem;
    width: 22%;
    
}
input[type=submit]{
    width: 15%;
    background-color: #4CAF50;
    box-shadow: 0px 0px 5.5px 1.1px black;
    color: white;
    padding: 15px 20px;
    margin: 10px 0;
    border-radius: 4px;
    
    cursor: pointer;
    margin-top: 10px;
    
}
`
export const Div = styled.div`
background-color: #015958;
`;