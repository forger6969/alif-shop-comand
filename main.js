
let wrapper = document.querySelector('.button');
let cartBtn = wrapper.querySelector('.cart-btn');

cartBtn.addEventListener('click', () => {


  wrapper.innerHTML = `
    <div class="w-28 h-10 border-2 border-gray-500 flex items-center justify-between rounded-lg px-3 py-2 text-sm">

      <button class="minus p-1" disabled>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="#A5B1BB" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <span class="count font-medium text-sm">1</span>

      <button class="plus p-1">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19" stroke="#A5B1BB" stroke-width="2" stroke-linecap="round"/>
          <path d="M5 12H19" stroke="#A5B1BB" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

    </div>
  `;

  const minus = wrapper.querySelector('.minus');
  const plus = wrapper.querySelector('.plus');
  const count = wrapper.querySelector('.count');

  let value = 1;
  const max = 10;


  plus.addEventListener('click', () => {
    if (value < max) { 
      value++;
      count.innerText = value;
      minus.disabled = false; 
    }
    if (value === max) {
      plus.disabled = true; 
    }
  });


  minus.addEventListener('click', () => {
    if (value > 1) {
      value--;
      count.innerText = value;
      plus.disabled = false; 
      if (value === 1) minus.disabled = true; 
    }
  });

});
