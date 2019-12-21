function carousel() {
    let cpt = 1;
    let carousel = document.querySelector('#carousel-content');
    let button = document.querySelectorAll('#button-car span');
    let pos = ['0px', '-300px', '-580px', '-850px'];
    button[0].addEventListener('click', () => {
        carousel.style.left = '0px';
    });

    button[1].addEventListener('click', () => {
        carousel.style.left = '-300px';
    });

    button[2].addEventListener('click', () => {
        carousel.style.left = '-580px';
    });

    button[3].addEventListener('click', () => {
        carousel.style.left = '-850px';
    });

    button.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = '#bebebe';
        });
        e.addEventListener('mouseout', () => {
            e.style.backgroundColor = '';
        })
    });
    setInterval(() => {
        carousel.style.left = pos[cpt];
        cpt = (cpt + 1) % 4;
    }, 5000);
}

export {
    carousel
}