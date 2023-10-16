const trigger = document.querySelector('#social-media-trigger');
const socialMediaElements = document.querySelectorAll('.social-media');
const socialMediaMenu = document.querySelector('.social-media-menu');

let visible = false;

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    trigger.classList.toggle('active');
    if(visible){
        socialMediaElements.forEach((element) => {
            element.style.transform = 'translateY(-20rem)';
        });
        visible = false;
        socialMediaMenu.style.visibility = 'hidden';
    }else{
        socialMediaMenu.style.visibility = 'visible';
        socialMediaElements.forEach((element) => {
            element.style.transform = 'translateY(0)';
        });
        visible = true;
    }
    
});