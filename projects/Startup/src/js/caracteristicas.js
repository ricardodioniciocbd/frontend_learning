const previews = document.getElementById('previews');
const tabs = document.getElementById('tabs');

tabs.addEventListener('click', (e) => { // e - nos va a ayudar a ver a cual 'tab' le dimos clic, la razon para trabajar con el Evento, es que nosotros podemos acceder a la propiedad target y de esta manera obtener que tab le hizimos clic
    e.preventDefault();
    
    const selectedTab =  e.target.closest('.tab'); // SE BUSCA CUAL FUE LA TAB A LA QUE SE DIO CLIC
    if(selectedTab) {
        const id = selectedTab.dataset.id; // SE EXTRAE EL ID DE ESE TAB

        previews.querySelector('.active').classList.remove('active'); //   BUSCA LA CLASE 'active' TANTO EN TABS COMO EN PREVIEW Y LAS QUITA Y SE LAS PONE AL ELEMENTO AL CUAL SE LE HIZO UN CLICL>>>>:
        previews.querySelector(`[data-id="${id}"]`).classList.add('active');

        tabs.querySelector('.active').classList.remove('active'); //   BUSCA LA CLASE 'active' TANTO EN TABS COMO EN PREVIEW Y LAS QUITA Y SE LAS PONE AL ELEMENTO AL CUAL SE LE HIZO UN CLICL>>>>:
        tabs.querySelector(`[data-id="${id}"]`).classList.add('active');
    }
})