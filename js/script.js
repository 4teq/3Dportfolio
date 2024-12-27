//set z index of all pages
//this will ensure that the last page does not appear first due to zindex from transform
const pages = document.querySelectorAll('.book-page.page-right');
pages.forEach((page, index, ar)=>{
    page.style.zIndex = ar.length - index;
});

//turn pages when click next or prev button
const pageTurnbtn = document.querySelectorAll('.nextprev-btn');


pageTurnbtn.forEach((el, index, ar)=>{
 
    el.addEventListener('click', ()=>{
        const pageTurnID = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnID);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            },300);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            },300);
        }
    });
});

//contact me button when clicked


const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.addEventListener('click', ()=>{
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            
            page.classList.add('turn');

            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            }, 300);
        }, (index + 1) * 200 + 100);
    });
});

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back profile when button is clicked

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    pages.forEach((page, index)=>{
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
});