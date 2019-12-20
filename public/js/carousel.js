function carousel() {

class Carousel{

    constructor (element, options={}){
        console.log('Hello');
        
    }
}







    document.addEventListener('DOMContentLoaded', function () {


// Créer un objet Carousel
        new Carousel(document.querySelector('#carousel')), {
            slidesToscroll: 1,
            slidesVisible: 4
        }

    })
}

export {
    carousel
}