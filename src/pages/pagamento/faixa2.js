export default function faixa2() {
    return (
        <div class="direita">
        <div class="titulo">
            Finalizar Compra:
        </div>

        <div class="quadrado">
            <div class="espaco">
                <div class="f1-titulo1">
                    DADOS PESSOAIS
                </div>

                <div class="input">
                    <div class="f1-titulo">
                        Email
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>

                <div class="dois">
                    <div class="Nome">
                        <div class="f1-titulo">
                            Nome
                        </div>
    
                        <input type="text" placeholder="" ></input>
                    </div>

                    <div class="Sobrenome">
                        <div class="f1-titulo">
                            Sobrenome
                        </div>
    
                        <input type="text" placeholder="" ></input>
                    </div>
                </div>
                
                <div class="input">
                        <div class="f1-titulo">
                            CPF
                        </div>
    
                        <input type="text" placeholder="" ></input>
                </div>

                <div class="input">
                    <div class="f1-titulo">
                        Telefone
                    </div>

                    <input type="text" placeholder="" ></input>
                </div>
            </div>
        </div>

        <div class="titulo2">
            Entrega:
        </div>

        <div class="quadrado">
            <div class="espaco">
                <div class="inp">
                    <div class="um">
                        <div class="f1-titulo">
                            CEP
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>

                    <div class="dois2">
                        <div class="f1-titulo">
                            Endere??o
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>
                </div>

                <div class="inp">
                    <div class="um">
                        <div class="f1-titulo">
                            Barirro
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>

                    <div class="dois2">
                        <div class="f1-titulo">
                            Estado
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>
                </div>

                <div class="inp">
                    <div class="um">
                        <div class="f1-titulo">
                            Rua / Avenida
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>

                    <div class="dois2">
                        <div class="f1-titulo">
                            N??mero
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>
                </div>

                <div class="inp">
                    <div class="um2">
                        <div class="f1-titulo">
                            Destinat??rio
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>
                </div>
            </div>
        </div>

        <div class="titulo2">
            Pagamento
        </div>

        <div class="quadrado">
            <div class="espaco">
                <div class="pagamento">
                    <div class="botao2">
                        <button>
                        <img src={require("../../assets/images/VectorBoleto.png")} alt="" /></button>
                        <div class="p-titulo">Boleto</div>
                    </div>

                    <div class="botao2">
                        <button><img src={require("../../assets/images/VectorCart??o.png")} alt="" /></button>
                        <div class="p-titulo">Cart??o</div>
                    </div>

                    <div class="botao2">
                        <button><img src={require("../../assets/images/image 38Pix.png")} alt="" /></button>
                        <div class="p-titulo">Pix</div>
                    </div>
                </div>

                <div class="boleto">
                    <div class="titulo3">
                        Boleto banc??rio
                    </div>

                    <div class="textinho">
                        O Boleto banc??rio ser?? exibido ap??s a confirma????o da compra e poder?? ser <br>
                        impresso para pagamento em qualquer ag??ncia banc??ria, ou ter o n??mero anotado </br>
                        para pagamento pelo telefone ou internet.
                    </div>
                </div>

                <div class="botao-reverse">
                    <button>Finalizar Compra</button>
                </div>
                
                  </div>

              </div>
                
            </div>     
    );
  }