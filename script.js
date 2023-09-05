// const productAdd = document.querySelector("button");

// productAdd.addEventListener("click", () => {
//     // when user click on button button will be invisible
//     productAdd.style.display = "none";
// });

// For selecting products into the cart
// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//     product.addEventListener("click", (event)=>{
//         event.target.innerText = "Product Selected";
//     })
// });

// For removing products from the list
// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//     product.addEventListener("click", (event)=>{
//         event.target.remove();
//         console.log(event.target.texrContent);
//     })
// });


// Adding product in the list
// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click",(event)=> {
//     addProduct.innerHTML += "<li>New Product</li>";

//     console.log(addProduct.innerHTML);
// })


// const addProduct = document.querySelector("ul");
// console.log(addProduct);


// New method to add and remove products from the list

// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = prompt("Enter product name");
//     addProduct.append(li);
// })

// addProduct.addEventListener("click",(event) => {
//     if(event.target.tagName === "LI") {
//         event.target.remove();
//     }
// })


// When user try to copy text show them alert dialog box
// const products = document.querySelector("ul");
// products.addEventListener("copy",(event) => {
//     if(event.target.tagName === "LI"){
//     alert("Please don't copy");
//     }
// });

// Now, lets do fun with mouse pointer
// We can get control of users mouse pointer movement with this function
// const webPage = document.querySelector("body");
// webPage.addEventListener("mousemove",(event) => {
//     console.log(event.clientX,event.clientY);
// })