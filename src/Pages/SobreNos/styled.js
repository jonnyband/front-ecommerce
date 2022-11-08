import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
background: #015958;
height: 100vh;
color: white;

`;

export const Content = styled.div`
display: flex;
width: 100%; 
align-items: center;
flex-direction: column;
background-color: #0E3B43;
margin-top: 20px;
margin-bottom: 10px;


span{
    font-size: 25px;
    margin-right: 15px;
    cursor: pointer;
    :hover{
        opacity: 0.6;
    }
}

header{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 30px;
}
`;

export const Card = styled.div`
border:  2px solid;
border-radius: 10px 10px 10px 10px;
padding: 5px 5px 5px 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #023535;
width: 65vh;
height: 15vh;
text-align: center;
margin-bottom: 20px;
box-shadow: 0px -1px 14px 2px black;

img{
    border-radius: 50%;
    height: 12vh;
    width: 12vh;
    border: 2px solid white;

} 

h1{
    font-size: 1.2rem;
    padding: 10px 10px 10px 10px;
    display: inline-block;
    position: relative;

}
`;

export const Buttons =styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

button{
    height: 4vh;
    width: 14vh;
    margin: 20px;
    border: 2px solid white;
    border-radius: 10px 10px 10px 10px;
    color: white;
    font-size: 1.2rem;
    background-color: #3BB273;

    cursor: pointer;
    :hover{
    opacity: 0.6;
    }  
}
`;

export const Div = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-left: 5vh;
`;

export const Header = styled.div`
text-align: justify;
width: 60%;
`;