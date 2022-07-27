let fullData = [];
const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
const loadingElement = document.querySelector("#loading");
const catalog = document.querySelector(".catalog");
const filterName = document.getElementById("filter-name");
const filterBrand = document.getElementById("filter-brand");
const filterType = document.getElementById("filter-type");
const sortType = document.getElementById("sort-type");

async function getAllData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  loadingElement.classList.add("hide");

  data.map((item) => {
    productItem(item);
  });
}
getAllData();

function productItem(item) {
  console.log("função");
  let src = "//";
  let name = "";
  let brand = "";
  let price = 0;

  const product = `
  <figure class="product-figure">
  <img src="${item.image_link}"  width="215" height="215" alt="${item.name}">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${item.name}</h1>
    <div class="product-brands">
    <span class="product-brand background-brand">${item.brand}</span>
<span class="product-brand background-price">R$ ${(
    parseFloat(item.price) * 5.5
  ).toFixed(2)}</span>
</div>
  </section>
  // CARREGAR OS DETALHES
`;
  const div = document.createElement("div");
  catalog.appendChild(div);
  div.innerHTML = product;
  div.classList.add("product");
}

/* 
- Criar constantes com os elementos html
- fazer fetch da API 
- Criar evento para iniciar as buscas
- criar funções com fetch para os respectivos parâmetros
- Criar evento para organizar exibição com respectivos parametros
- inserir os dados no html.



*/

/* 


//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  const item = `
  <div class="product" data-name="NYX Mosaic Powder Blush Paradise" data-brand="nyx" data-type="bronzer" tabindex="508">
  <figure class="product-figure">
    <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png" width="215" height="215" alt="NYX Mosaic Powder Blush Paradise" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">NYX Mosaic Powder Blush Paradise</h1>
    <div class="product-brands"><span class="product-brand background-brand">Nyx</span>
<span class="product-brand background-price">R$ 57.70</span></div>
  </section>
  // CARREGAR OS DETALHES
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}
 */
