const wrap = document.querySelector('.wrap')
// console.log(wrap);



let prods = [
    {
        img:'https://openshop.uz/public/storage/uploads/products/photos/202210/K1caIRyEplH8kOPZ8SJup3mWlrZaz9CnyDJ5zA15.jpg',
        name:'apple',
        prise:900,
        
    },

    {
        img:'https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a546elvaskz/gallery/uz-ru-galaxy-a54-5g-sm-a546-sm-a546elvaskz-536203876?$650_519_PNG$',
        name:'samsung',
        prise:600,
        
    },

    {
        img:'https://assets.asaxiy.uz/product/items/desktop/9ff181c0b7c5047488051e8f2922b3fc20240108140103836202wTPeJFjWD.png',
        name:'honor',
        prise:200,
        
    },

    {
        img:'https://media.bite.lt/@bite-lv/sites/default/files/products/2021-10/nokia_g50_ocean-blue.png',
        name:'nokia',
        prise:100,
        
    },

    {
        img:'https://openshop.uz/public/storage/uploads/products/photos/202308/r26NNfjbyPWqLspNyq0YDukNnS2xaZeXlNbvTbfE.jpg',
        name:'xomi',
        prise:400,
        
    },
]

prods.map((item) => {
    wrap.innerHTML += ` 
   <div class="card">
    <img src="${item.img}" alt="">
    <h3>${item,name}</h3>
<h4>${item.prise}</h4>
    <button>by</button>
</div>`

})