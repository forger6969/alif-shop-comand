function startTimer() {
  const now = new Date();

  // Bugungi sana uchun 11:00 maqsad qilib olinadi
  let target = new Date();
  target.setHours(11, 0, 0, 0);

  // Agar hozir 11:00 dan o‘tib ketgan bo‘lsa — ertangi 11:00 ga qo‘yiladi
  if (now > target) {
    target.setDate(target.getDate() + 1);
  }

  function update() {
    let diff = target - new Date();

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("d").textContent = days;
    document.getElementById("h").textContent = hours;
    document.getElementById("m").textContent = minutes;
    document.getElementById("s").textContent = seconds;
  }

  update();
  setInterval(update, 1000);
}

startTimer();

// search ishlatish uchun function

function searchInput() {
  let header_input = document.querySelector('#header_input')
  header_input.addEventListener("click", () => {
    let searchInput = document.querySelector('.searchInput');
    let dearch_div = document.querySelector('.dearch_div');
    dearch_div.classList.remove('hidden')
    searchInput.classList.add('hidden');


  })

}

searchInput()

function closee() {
  let dearch_div = document.querySelector('.dearch_div');
  let searchInput = document.querySelector('.searchInput');
  dearch_div.classList.add('hidden');
  searchInput.classList.remove('hidden');
}



// render card function

function rendersearch(data) {
  let card_wrapper = document.querySelector('.card_wrappers');
  card_wrapper.innerHTML = null;
  data.forEach((e) => {
    let card = document.createElement('div');
    card.classList = 'renderCard w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${e.image}" class="w-full h-40 object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${e.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${e.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${e.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in  hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
    `;
    card_wrapper.append(card);
  })

  
}


function searchchange(data) {
  let SearchChange = document.querySelector('.SearchChange');
  SearchChange.addEventListener('input' , e => {
    let SearchChangeValue = SearchChange.value.toLowerCase().trim();
    let filtercard = data.filter((e) => e.name.toLowerCase().includes(SearchChangeValue))
    
    rendersearch(filtercard);
    
    
  })
  
}


let finc = async () => {
  try {
    const res = await fetch('http://localhost:3001/product');
    const data = await res.json();
    // console.log(data);
    searchchange(data)

rendersearch(data)




    const categories = {};
    data.forEach(item => {
      // create category array if missing
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      // push product inside its category
      categories[item.category].push(item);
    });

    // console.log(categories);



    let random = Math.round(data.id)
    // console.log(random, 'mana');


    let tech = document.querySelector('.tech');
    let techn = categories.technology

    let parfiums = document.querySelector('.parfiums');
    let parfium = categories.parfiums

    let cleaner = document.querySelector('.cleaners');
    let cleaners = categories.cleaners

    let homes = document.querySelector('.home');
    let home = categories.products_for_home

    let car = document.querySelector('.cars');
    let cars = categories.products_for_cars


    let watchesss = document.querySelector('.watches');
    let watches = categories.watches
    // console.log(watches);

    watches.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      watchesss.append(card);
    })

    techn.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      tech.append(card);
    })

    let cloth = document.querySelector(".clothes")
    let clothes = categories.clothes

    clothes.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      cloth.append(card);
    })



    parfium.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      parfiums.append(card);
    })

    cars.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      car.append(card);
    })

    home.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      homes.append(card);
    })

    cleaners.forEach(watch => {
      let card = document.createElement('div');
      card.classList = 'w-[19%] card relative mb-[25px] bg-white rounded-xl shadow p-4 flex gap-[10px] flex-col';
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
      <img src="${watch.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${watch.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${watch.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${watch.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
      cleaner.append(card);
    })



    // function  sortAll(data) {
    //   let selectorrr = document.querySelector('.btn.all');

    //   selectorrr.addEventListener('change', () => {
    //     let selectValue = selectorrr.value;
    //     let newArr = [];

    //     if (selectValue === 'all') {
    //       newArr = data;



    //     } else {
    //       newArr = data.filter(item =>
    //         item.category &&
    //         item.category.toLowerCase().includes(selectValue.toLowerCase())
    //       );
    //     }

    //      renderdom(newArr);
    //   });
    // }


    //   renderdom(data);



    // sortAll(data);


  


  } catch (e) {
    console.error(e);
  } finally {
    console.log('nima bosayam ishladim');
  }
}

finc();

function katalos() {
  window.location.href = "katalog_xob.html"
}
const openBtn = document.getElementById("openCatalog");
const closeBtn = document.getElementById("closeCatalog");
const modal = document.getElementById("catalogModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
