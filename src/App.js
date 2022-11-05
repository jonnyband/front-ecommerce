import {React, useEffect, useState} from "react";
import { Home } from "./Pages/Home";
import { getPedidos } from "./Service/pedidoService";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes/router";
import { BrowserRouter } from "react-router-dom";
import {CartContent} from "./Contexts"


function App() {

return(
  <>
  <BrowserRouter>
  <GlobalStyle/>
  <CartContent>
    <Router />
    </CartContent>
    </BrowserRouter>
  </>
)
}

export default App;
