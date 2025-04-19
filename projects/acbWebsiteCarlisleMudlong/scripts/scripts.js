


const testimonials = document.querySelectorAll('.testimonial-box');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let startIndex = 0;


// Function  for cycling testimonial visibility
function showTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % testimonials.length;
        testimonials[index].classList.add('active');
    }
}
//testimonial buttons function
nextBtn.addEventListener('click', () => {
    startIndex = (startIndex + 3) % testimonials.length;
    showTestimonials();
});
prevBtn.addEventListener('click', () => {
    startIndex = (startIndex - 3 + testimonials.length) % testimonials.length;
    showTestimonials();
});



// quick service buttons event listeners
const itSupportBtn = document.getElementsByClassName("service-container")[0];
itSupportBtn.addEventListener("click", () => {
    console.log("it support")
    window.location.href = "https://www.w3.org/Provider/Style/dummy.html"
})
const hadrwareBtn = document.getElementsByClassName("service-container")[1];
hadrwareBtn.addEventListener("click", () => {
    console.log("hardware maintenance")
    window.location.href = "https://www.w3.org/Provider/Style/dummy.html"
})
const systemBtn = document.getElementsByClassName("service-container")[2];
systemBtn.addEventListener("click", () => {
    console.log("system maintenance")
    window.location.href = "https://www.w3.org/Provider/Style/dummy.html"
})
const consultBtn = document.getElementsByClassName("service-container")[3];
consultBtn.addEventListener("click", () => {
    console.log("consultancy")
    window.location.href = "https://www.w3.org/Provider/Style/dummy.html"
})


// function for making navbar sticky when page is scrolled down
const navSticky = () => {
    const navbar = document.getElementsByClassName('navbar')[0];
    const links = [...document.getElementsByClassName('nav-link')];

    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('sticky');
        links.forEach(link => {
            link.classList.add('sticky-font');
        });

    } else {
        navbar.classList.remove('sticky', 'sticky-font');
        links.forEach(link => {
            link.classList.remove('sticky-font');
        });
    }
}


window.addEventListener('scroll', navSticky);
showTestimonials();