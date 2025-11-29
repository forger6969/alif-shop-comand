
const catalogMap = {
    "smartfonlar": "technology",
    "pc": "technology",
    "tv": "technology",
    "audio": "technology",

    "transport": "products_for_cars",
    "avtotovarlar": "products_for_cars",

    "forHome": "products_for_home",
    "uyUchun": "products_for_home",
    "uyVaBog": "products_for_home",
    "uyVaBog": "products_for_home",

    "oshxona": "cleaners",

    "gozallik": "parfiums",
    "kimyo": "cleaners",

    "aqilliUy": "technology",

    "play": "technology",

    "sport": "sports",

    "bolalar": "clothes",

    "qurilish": "products_for_home",

    "ovqat": "products_for_home",

    "kanselyariya": "products_for_home"
};


const fetchh = async () => {
    try {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        console.log(data);

        render(data)
    }
    catch (e) {
        console.log(e);

    }
    finally {
        console.log('ishlavotti..!');

    }
}
fetchh()






let cards = document.querySelectorAll('#card')

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let pTegi = card.querySelector('.kategory-name')
        let valuee = pTegi.innerText;
        localStorage.setItem("vaelue", valuee)
        console.log(pTegi);
        let catolgi = catalogMap.valuee



        let cardd = card.getAttribute('value');
        console.log(cardd);
        window.location.href = 'render_catalog.html';



    })

})

function render_catalog() {
    const catalog_name = document.querySelector('.catalog_name')
    const catalog_nam = document.querySelector('.catalog_nam')
    let localeName = localStorage.getItem("vaelue")
    catalog_name.textContent = `${localeName}`;
    catalog_nam.textContent = `${localeName}`;
}
render_catalog()

function render(data) {
    let card_wrapper = document.querySelector('.card_wrapper');
    data.forEach((e) => {
        let card = document.createElement('div');
        card.classList = 'renderCard';
        card.innerHTML = `
                    <button class="absolute top-6 right-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c6c6c6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="hover:fill-red-500 hover:stroke-red-500 transition">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
               5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
               1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    </button>
      <img src="${e.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${e.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${product.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${e.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
    `;
        card_wrapper.append(card);
    })

}   

render()





