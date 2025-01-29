const productsContainer = document.querySelector(".all-products")
const centerShopContainer = document.querySelector(".delive-places")

const productData = [
    { id: 1, name: "پودر پرسیل 2 کیلویی", price: 50000, img: 'images/pictures/1.jpg' },
    { id: 2, name: "هندونه 3 کیلویی", price: 800000, img: 'images/pictures/2.jpg' },
    { id: 3, name: "لوبیا چیتی 5 کیلویی", price: 47000, img: 'images/pictures/3.jpg' },
    { id: 4, name: "پنیر 1 کیلویی میهن", price: 34000, img: 'images/pictures/4.jpg' },
    { id: 5, name: "ماست گیلگ 900 گرمی", price: 70000, img: 'images/pictures/5.jpg' },
    { id: 6, name: "رب 10 کیلویی", price: 97000, img: 'images/pictures/6.jpg' },
    { id: 7, name: "کرانچی چیتور ", price: 20000, img: 'images/pictures/7.jpg' },
    { id: 8, name: "چیپس 150 گرمی چیتوز", price: 25000, img: 'images/pictures/8.jpg' },
]

console.log();


const places = [
    {name : 'افق کورش کرواسی' , telphone : '815154836' , img : 'images/pictures/korosh1.jpg'},
    {name : 'افق کورش ملارد' , telphone : '45487845' , img : 'images/pictures/korosh3.jpg'},
    {name : 'افق کورش تهران' , telphone : '14841552' , img : 'images/pictures/korosh4.jpg'},
    {name : 'افق کورش تبریز' , telphone : '1214545413' , img : 'images/pictures/korosh5.jpg'},
    {name : 'افق کورش یزد' , telphone : '87812145' , img : 'images/pictures/korosh6.jpg'}
]

productData.forEach(product => {
    productsContainer.insertAdjacentHTML("beforeend", `<div class="product-item col-5">
                <div class="product-image col-3">
                    <img src='${product.img}'class="img-product">
                </div>
                <div class="details-product col-9">
                    <h3>${product.name}</h3>
                    <h4>قیمت هر بسته ${product.price}</h4>
                    <div class="history-products">
                        <h5 class="history-product">ثبت نام از ۱۴۰۲/۷/۰۶ تا ۱۴۰۲/۷/۰۶</h5>
                        <h5 class="history-product">ثبت نام از ۱۴۰۲/۷/۰۶ تا ۱۴۰۲/۷/۰۶</h5>
                    </div>
                    <div class="btn-product">
                        <h4 class="fas fa-shopping-cart history-product">پرداخت در فروشگاه</h4>
                        <div class="btn  btn-withoutPadding">
                            <a class="order-btn special-btn" href="#"> +  ثبت سفارش</a>
                        </div>
                    </div>
                </div>
            </div>
            `)

})
places.forEach(shop => {
    centerShopContainer.insertAdjacentHTML('beforeend', `
        <div class="delive-pictures">
            <img class="delive-picture" src="${shop.img}">
            <div class="data-mall_place">
                <h3>${shop.name}</h3>
                <span>${shop.telphone}
                    <i class="fa fa-phone"></i>
                    <br>
                </span>
                <span>${shop.telphone}
                    <i class="fa fa-phone"></i>
                </span>
            </div>
        </div>`)
})



