// kataloglarni render qilish

function katalogRender(ctgry) {
    const ctlgWrapper = document.querySelector('.card-wrapper-katalog');
    ctlgWrapper.innerHTML = ''
    ctgry.forEach((e) => {
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="card w-[300px] flex flex-col justify-center items-start" value="${e.value}" catname="${e.name}">
            <img class="w-[150px] mx-auto  "
                            src="${e.image}"
                            alt="img">
                        <p class="kategory-name mx-auto  text-[16px]  font-medium mb-[10px] text-[#000000]"></p>${e.name}
                        <p class="category-about text-[14px] font-medium text-[#0000009d] ml-6">${e.description}
                        </p>
        </div>
        `;

        ctlgWrapper.append(card)
    })

}




function catalogniki() {
    // katalog nomi locale ga sax qiladigan funksiya..!
    let cards = document.querySelectorAll('.card');
    
    

cards.forEach((card) => {
    card.addEventListener('click', (e) => {

        
        let atribut = card.getAttribute('value')
        let nam = card.getAttribute('catname')


        


        localStorage.setItem("vaelue", nam)
        localStorage.setItem("atributeVelyu", atribut )





        window.location.href = 'render_catalog.html';



    })

})
}









const catalog_render = async () => {
    try {
        const category = await fetch('http://localhost:3001/categorys')
        const ctgryData = await category.json()
        console.log(ctgryData);   
        katalogRender(ctgryData)  
        catalogniki(ctgryData)
    }
    catch (e) {
        console.error(e);

    }
    finally {
        console.log('ishlavotti..!');

    }
}
catalog_render()