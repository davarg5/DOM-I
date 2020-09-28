const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
const links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

const newLink1 = document.createElement("a");
newLink1.textContent = "FAQ";
newLink1.href = "#";
document.querySelector("nav").append(newLink1);

const newLink2 = document.createElement("a");
newLink2.textContent = "Our Team";
newLink2.href = "#";
document.querySelector("nav").prepend(newLink2);

links[0].setAttribute("id", "green0")
document.getElementById("green0").style.color = "green";
links[1].setAttribute("id", "green1")
document.getElementById("green1").style.color = "green";
links[2].setAttribute("id", "green2")
document.getElementById("green2").style.color = "green";
links[3].setAttribute("id", "green3")
document.getElementById("green3").style.color = "green";
links[4].setAttribute("id", "green4")
document.getElementById("green4").style.color = "green";
links[5].setAttribute("id", "green5")
document.getElementById("green5").style.color = "green";

newLink1.setAttribute("id", "green6")
document.getElementById("green6").style.color = "green";
newLink2.setAttribute("id", "green7")
document.getElementById("green7").style.color = "green";

document.body.style.backgroundColor = "turquoise";


//cta
const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];
h1.textContent = "DOM\nIS\nAWESOME";
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
const cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src',siteContent["cta"]["img-src"]);

//main content
//features
const h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
const p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"];

//about
h4[1].textContent = siteContent["main-content"]["about-h4"];
p[1].textContent = siteContent["main-content"]["about-content"];
const main_img = document.getElementById("middle-img");
main_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content
//services
h4[2].textContent = siteContent["main-content"]["services-h4"];
p[2].textContent = siteContent["main-content"]["services-content"];

//product
h4[3].textContent = siteContent["main-content"]["product-h4"];
p[3].textContent = siteContent["main-content"]["product-content"];

//vision
h4[4].textContent = siteContent["main-content"]["vision-h4"];
p[4].textContent = siteContent["main-content"]["vision-content"];

//contact
h4[5].textContent = siteContent["contact"]["contact-h4"];
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];

//footer 
p[8].textContent = siteContent["footer"]["copyright"];