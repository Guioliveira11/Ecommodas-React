import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

import cadastro from "./pages/cadastrar";
import compra from "./pages/comprar";
import feminino from "./pages/feminino";
import inicial from "./pages/inicial";
import lista from "./pages/lista-de-desejos";
import login from "./login";
import pedidos from "./pages/meus-pedidos";
import conta from "./pages/minha-conta";
import endereço from "./pages/novo-endereço";
import pagamento1 from "./pages/pagamento";
import pagamento2 from "./pages/pagamento2";
import confirmação from "./pages/pedido-confirmado";
import produto from "./pages/produto";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastrar" component={cadastro} />
        <Route path="/comprar"  component={compra} />
        <Route path="/feminino"  component={feminino} />
        <Route path="/inicial" component={inicial} />
        <Route path="/lista-de-desejos"  component={lista} />
        <Route path="/login"  component={login} />
        <Route path="/meus-pedidos"  component={pedidos} />
        <Route path="/minha-conta"  component={conta} />
        <Route path="/novo-endereço"  component={endereço} />
        <Route path="/pagamento"  component={pagamento1} />
        <Route path="/pagamento2"  component={pagamento2} />
        <Route path="/pedido-confirmado" component={confirmação} />
        <Route path="/produto" component={produto} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);