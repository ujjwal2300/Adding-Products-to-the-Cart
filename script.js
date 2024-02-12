// show real products

var products = [
    {name: "Wooden Chair",headline: "Made from premium wood",price: "5,000"  ,image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "White Chair",headline: "Made from premium wool",price: "8,000"  ,image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Sofa",headline: "Give Comfort",price: "15,000"  ,image:"https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},
];

var popular = [
    {name: "Red Chair",headline: "Made from premium wood",price: "10,000"  ,image:"https://images.unsplash.com/flagged/photo-1577734319558-e537525e1d8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "White Chair",headline: "Made from premium wool",price: "8,000"  ,image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Sofa",headline: "Give Comfort",price: "15,000"  ,image:"https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},
]

var cart = [];

function addProduct(){
    
    var clutter = "";
products.forEach(function(product, index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
            </div>
            <button data-index = "${index}"class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i data-index = "${index}" class="add ri-add-line"></i>
            </button>
        </div>
    </div>
</div>`;
})


document.querySelector(".products").innerHTML = clutter;

}


function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
        </div>
    </div>`;

    });

    document.querySelector(".populars").innerHTML = clutter;

}

// Here we use Event Bubbling concept by applying Event Listener on Parent div
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
             cart.push(products[details.target.dataset.index]);
        }
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(prod, index){
            clutter +=` <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${prod.image}" />
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div> `;
        })
        document.querySelector(".cartexpnd")
        .innerHTML = clutter;
    });
}


showCart();

addProduct();

addPopularProducts();

addToCart();
// show real popular products
// on click of product add button add it to the cart