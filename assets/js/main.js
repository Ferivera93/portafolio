const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    };
    //Sections active class
    // allSections.addEventListener('click', (e) =>{
    //     const id = e.target.dataset.id;
    //     if (id) {
    //         //removes selecected from other btns
    //         sectBtns.forEach((btn) =>{
    //             btn.classList.remove('active');
    //         })
    //         e.target.classList.add('active');

    //         //hide other sections
    //         sections.forEach((section) =>{
    //             section.classList.remove('active');
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })

    //test personal
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransition();