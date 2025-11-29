
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






let cards = document.querySelectorAll('.card')

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
                    <img class="w-[200px]" src="${e.image}" alt="">
                    <p class="title text-[20px] font-[700]">Product</p>
                    <p class="price font-[600]">1500</p>
                    <button><img src="" alt="">Savatga</button>
    `;
    card_wrapper.append(card);
    })

}





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