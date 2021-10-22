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
                            Endereço
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
                            Número
                        </div>

                        <input type="text" placeholder="" ></input>
                    </div>
                </div>

                <div class="inp">
                    <div class="um2">
                        <div class="f1-titulo">
                            Destinatário
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
                        <button><img src={require("../../assets/images/VectorCartão.png")} alt="" /></button>
                        <div class="p-titulo">Cartão</div>
                    </div>

                    <div class="botao2">
                        <button><img src={require("../../assets/images/image 38Pix.png")} alt="" /></button>
                        <div class="p-titulo">Pix</div>
                    </div>
                </div>

                <div class="boleto">
                    <div class="titulo3">
                        Boleto bancário
                    </div>

                    <div class="textinho">
                        O Boleto bancário será exibido após a confirmação da compra e poderá ser <br>
                        impresso para pagamento em qualquer agência bancária, ou ter o número anotado </br>
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