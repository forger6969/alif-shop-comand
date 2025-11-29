let finc = async () => {
    try {
      const res = await fetch('http://localhost:3001/products');
      const data = await res.json();
      console.log(data);
  
      function renderdom(products) {
        let wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = '';
  
        products.forEach(product => {
          let card = document.createElement('div');
          card.classList = 'card';
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
      <img src="${product.image}" class="w-[200px] h-[200px] object-cover mx-auto" />
      <h3 class="mt-3 font-semibold text-sm">${product.name}</h3>
      <p class="text-black text-sm bg-orange-100 pl-[10px] w-[160px]  border-yellow-300 border-[2px] border-solid rounded-xl">от <span class="font-bold">${product.installment}</span> сум/мес</p>
      <p class="font-semibold text-lg mt-1">${product.newPrice} сум</p>
      <button class="mt-auto bg-yellow-400 w-full duration-300 ease-in hover:bg-yellow-300 py-2 rounded-lg font-semibold">
        В корзину
      </button>
          `;
          wrapper.append(card);
        });
      }
  
      renderdom(data);


    //   function filterCard(fllter) {
    //     let input = document.querySelector('.input-input')
    //     input.addEventListener('input', () => {
    //         let inputvalue = input.value.toLowerCase().trim()
    //         let filtercard = fllter.filter((e) => e.title.toLowerCase().trim().includes(inputvalue))
    
    //         renderdom(filtercard)
    
    //     })
    
    // }
    // filterCard(data)


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
  