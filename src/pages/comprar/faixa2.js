export default function faixa2() {
    return (
      <div class="faixa-1">
        <div class="esquerda">
          <div class="pt-1">
            <div class="f1-img">
              <img
                src={require("../../assets/images/VectorCaminhão.png")}
                alt=""
              />
            </div>
  
            <div class="f1-textos">
              <div class="f1-titulo">Taxa de envio</div>
  
              <div class="f1-descricao">
                Compre mais R$14,10 para desfrutar de FRETE GRÁTIS!
              </div>
            </div>
          </div>
  
          <div class="pt-2">
            <div class="f1-titulo">Resumo do pedido</div>
  
            <div class="f1-conjunto">
              <div class="f1-quadrado">
                <div class="nome2">Produto</div>
  
                <div class="img">
                  <img
                    src={require("../../assets/images/image 35Roupa.png")}
                    alt=""
                  />
                </div>
              </div>
  
              <div class="f1-quadrado">
                <div class="nome2">Tamanho</div>
  
                <div class="info2">GG</div>
              </div>
  
              <div class="f1-quadrado">
                <div class="nome2">Preço</div>
  
                <div class="info">R$34,90</div>
              </div>
  
              <div class="f1-quadrado">
                <div class="nome2">Quantidade</div>
  
                <div class="info2">1</div>
              </div>
  
              <div class="f1-quadrado">
                <div class="nome2">Total</div>
  
                <div class="info">R$34,90</div>
              </div>
            </div>
  
            <div class="botao">
              <button>EXCLUIR</button>
            </div>
          </div>
        </div>
  
        <div class="direita">
          <div class="finalizar"></div>
  
          <div class="pagamento">
            <div class="f1-titulo">Finalizar Pedido</div>
  
            <div class="linha">
              <div class="grifado">Subtotal</div>
  
              <div class="negrito">R$34,90</div>
            </div>
  
            <div class="linha">
              <div class="grifado">Frete</div>
  
              <div class="negrito2">R$00,00</div>
            </div>
  
            <div class="botao2">
              <button>FINALIZAR COMPRA</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  