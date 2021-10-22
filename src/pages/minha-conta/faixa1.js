export default function faixa1() {
    return (
      <div class="Cabeçalho">
      <div class="logo">ecommodas</div>

      <div class="search-box">
        <input
          class="search-txt"
          type="text"
          name=""
          placeholder="Pesquisar..."
        />
        <img src={require("../assets/images/Vector (13).png")} alt="" />
        <a class="search-btn" href="#"></a>
      </div>

      <div class="icone-favoritos">
        <img src={require("../assets/images/Vector (2).png")} alt="" />
      </div>

      <div class="ícone-cesta">
        <img src={require("../assets/images/Vector (3).png")} alt="" />
      </div>

      <div class="ícone-login">
        <img src={require("../assets/images/path1826.png")} alt="" />
      </div>
    </div>
    );
  }