const config = {

};

let observer = new IntersectionObserver((entries) => {

}, config);

const img = document.getElementById("myImg");
observer.observe(img);

// What is an IntersectionObserver?