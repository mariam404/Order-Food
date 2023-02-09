var cardBtn = document.querySelectorAll('.card-btn')
var orderList = document.querySelector('.your-order-list')
var priceBtn = document.querySelector('.your-order-price')
var priceContainer = document.querySelector('.total-price')
var orderTitle = document.querySelector('.order-title')
var totalPrice = 0

cardBtn.forEach(function(item){
    item.onclick = function(){
        itemName = item.getAttribute('fname')
        orderList.innerHTML += `<h4 class="lead my-3" style="list-style: decimal;">${itemName}
        </h4>`
        totalPrice += parseInt (item.getAttribute('price'))

        if (orderList.innerHTML != ""){
            orderTitle.style.display="inline-block"
            priceBtn.style.display="inline-block"
        } else{
            orderTitle.style.display="none"
            priceBtn.style.display="none"
        }
    }
})

priceBtn.onclick = function(){
    priceContainer.innerHTML += `<h5 class="lead" style="font-weight: 700;">${totalPrice} $</h5>`
}

