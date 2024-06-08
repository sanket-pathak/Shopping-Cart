// targeted our shop and successfully included that in a variable
let shop = document.getElementById("shop");

//console.log(shop);

let shopItemsData = [{
    id: "JHBKHBKNJ",
    name: "Casual TShirt",
    price: 450,
    desc: "White Background TShirt with a blue cat ORIGINALS",
    img: "image1.jpg"
}, {
    id: "JBKHPOP",
    name: "Formal Shirt",
    price: 950,
    desc: "Blue Vertical Striped Shirt, Tie Not Included",
    img: "image2.jpg"

}, {
    id: "AXSXRTFCJBC",
    name: " Blazer",
    price: 2950,
    desc: "Prussian Blue Blazer",
    img: "image3.jpg"

}, {id: "LOKMKJBGFXD",
    name: "White Shirt",
    price: 300,
    desc: "Pure Cotton Outcast White Shirt ",
    img: "image4.jpg"
}]


//! if the object exists then we just increment the value
//! otherwise we push the object into the basket
let basket = [{
    item: 0,
}];


// MAKE FUNCTION IN A WAY GIVES ALL THE CARTS
let generateShop = () => {
    // !Map functions important at 57 minutes
    // ! Invisible Comma Theory
    //!dont forget the dollar sign , backticks are used to create template literals

    // ?why write x here, map targets all the items one by one.
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id, name, price , desc, img } = x;
        // if we don't write the above line then in each case need to say x.id, x.img etc
        return `
        <div id=product-id-${id} class="item">   
                <!-- ?inside item we have image and details tag and price quantity -->
                <img width=219 src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>₹${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash"></i>
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
    `
    }).join(""));
    //? comma gone but data not changed
    } 

    generateShop();

    // increment //decrement functions here

    let increment = (id) => {
        let selectedItem = id;
        //! search function
        let search = basket.find((x)=> x.id === selectedItem.id)

            if(search === undefined){
                basket.push({
                    id: selectedItem.id,
                    item: 1
                })
            }
            else{
                search.item +=1;
            }
       
        console.log(basket);
        update(selectedItem.id);
    };
    let decrement = (id) => {
        let selectedItem = id;
        //! search function
        let search = basket.find((x)=> x.id === selectedItem.id)

            if(search.item === 0){
                return;
            }
            else{
                search.item -=1;
            }
       
        // console.log(basket);
        update(selectedItem.id);
    };
    let update = (id) => {
        let search = basket.find((x) => x.id === id);
        // console.log(search.item);
        document.getElementById(id).innerHTML = search.item;
        calculation();
    };

    let calculation = () =>{
        let cartIcon = document.getElementById("cartAmount");
        // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
        //reduce function to add all the numbers 

        cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x,y)=>x+y,0));

    }