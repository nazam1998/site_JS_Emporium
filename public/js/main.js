import {
    carousel
} from './carousel.js'


let day = document.querySelectorAll('nav button')[0];
let night = document.querySelectorAll('nav button')[1];
let connect = document.querySelectorAll('nav button')[2];
let head = document.getElementsByTagName('header')[0];
let logo = document.querySelector('img');
let review = document.getElementById('review');
let icon = document.getElementById('bars');


// Permet de passer le bodyen mode nuit 

day.addEventListener('click', () => {
    document.body.classList.remove('bg-dark');
    connect.classList.replace('bg-light', 'bg-dark');
    connect.classList.replace('text-dark', 'text-white');
    document.body.classList.remove('text-white');
    review.querySelectorAll('.col-lg-3')[0].style.color = '';
    review.querySelectorAll('.col-lg-3')[2].style.color = '';
    logo.style.filter = '';
    icon.querySelectorAll('div').forEach(e => {
        e.style.backgroundColor = '#333';
    })
    head.querySelectorAll('a').forEach(e => {
        e.classList.replace('text-white', 'text-secondary');
    })
});

night.addEventListener('click', () => {
    document.body.classList.add('bg-dark');
    connect.classList.replace('bg-dark', 'bg-light');
    connect.classList.replace('text-white', 'text-dark');
    document.body.classList.add('text-white');
    review.querySelectorAll('.col-lg-3')[0].style.color = 'black';
    review.querySelectorAll('.col-lg-3')[2].style.color = 'black';
    logo.style.filter = 'drop-shadow(16px 16px 20px red) invert(75%)';
    icon.classList.add('text-white');
    icon.querySelectorAll('div').forEach(e => {
        e.style.backgroundColor = '#ffffff';
    })
    head.querySelectorAll('a').forEach(e => {
        e.classList.replace('text-secondary', 'text-white');
    })
});





// Modal

let modal = document.getElementById('myModal');

let modalButton = document.querySelectorAll('.modal button');
let formulaire = document.getElementsByClassName('formulaire');

let close = document.getElementsByClassName('close')[0];

// Déclenche le modal lorsqu'on clique sur le bouton connexion

connect.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

});

// Change de fenetre selon qu'on clique sur se connecter ou s'inscrire 

modalButton[0].addEventListener('click', () => {
    formulaire[0].classList.remove('d-none');
    formulaire[1].classList.add('d-none');
    modalButton[1].classList.remove('d-none');
    modalButton[0].classList.add('d-none');
});

modalButton[1].addEventListener('click', () => {
    formulaire[1].classList.remove('d-none');
    formulaire[0].classList.add('d-none');
    modalButton[0].classList.remove('d-none');
    modalButton[1].classList.add('d-none');
});

// Ferme la page lorsqu'on clique sur le span croix

close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

// Ferme le modal lorsqu'on clique en dehors de la fenetre

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = '';
    }
}


// nav qui passe en sticky


let header = document.getElementsByTagName('header')[0];
let img = document.querySelector('img');
window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        if (document.body.classList.contains('bg-dark')) {

            head.classList.add('bg-dark');
            head.classList.remove('bg-light');

        } else {

            head.classList.add('bg-light');
            head.classList.remove('bg-dark');
        }

        head.classList.add('sticky');
        img.style.float = 'left';

    } else {
        head.classList.remove('sticky');
        img.style.float = '';
        head.classList.remove('bg-dark');
        head.classList.remove('bg-light');

    }
});

// Nav bar produit

let produit = document.getElementById('produit');

let lienProd = header.querySelectorAll('a')[1];

lienProd.addEventListener('mouseover', () => {
    produit.style.display = 'block';

    produit.addEventListener('mouseout', () => {
        produit.style.display = 'none';
    })
    lienProd.addEventListener('mouseout', () => {
        produit.addEventListener('mouseover', () => {
            produit.style.display = 'block';
        })
    })
});

// Discover bg sticky

let discover = document.getElementById('discover');

window.addEventListener('scroll', () => {

    let scrolled = window.pageYOffset;
    let limit = discover.offsetTop + discover.offsetHeight;

    if (scrolled > discover.offsetTop - 3000 && scrolled <= limit + 3000) {

        discover.style.backgroundPositionY = (scrolled - discover.offsetTop - 800) * 0.3 + "px";

    } else {

        discover.style.backgroundPositionY = "0";
    }
});

carousel();



// Icon nav bar



icon.addEventListener('click', () => {
    icon.nextElementSibling.classList.toggle('d-none');
    icon.classList.toggle('change');
});
