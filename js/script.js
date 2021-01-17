
function totalPrice(food){
    return food.price*food.amount
}

setTimeout(function() {// ajax -> success
    for(let i = 0 ; i < foodArray.length; i++ ){
        render(foodArray[i])
    }
}, 500)

const foodArray = [
        {
            image : "pizza1.png", 
            name : "pizzaOne",
            price : "10000",
        },
        {
            image : "pizza2.png", 
            name : "pizzaTwo",
            price : "30000",
        },
        {
            image : "pizza3.png", 
            name : "pizzaThree",
            price : "20000",
        },
] 

const orderArray = [
    
] 


// 값을 넣어주세요
const menuList = document.querySelector('#menuList')
function render(food){
    const eachItem = document.createElement('div')
    eachItem.className = "eachItem"
    menuList.append(eachItem)

    const foodPic = document.createElement('img')
    foodPic.className = "list"
    foodPic.src=`images/${food.image}`
    foodPic.alt="food-image"
    eachItem.append(foodPic)

    const foodName = document.createElement('p')
    foodName.innerHTML = food.name
    eachItem.append(foodName)

    const foodPrice = document.createElement('p')
    foodPrice.innerHTML = food.price
    eachItem.append(foodPrice)

    const addButton = document.createElement('button')
    addButton.classList.add("addButton")
    addButton.append("ADD CART")
    eachItem.append(addButton)
    

    addButton.addEventListener('click',function(){
        const name = food.name
        const price = food.price
        const amount = 1
        const orderItem = {name : name, price : price , amount : amount}
        orderArray.push(orderItem)
        addItem(orderItem)
        const total = totalPrice(orderItem)
        const itemPrice = document.querySelector('#totalPrice')
        itemPrice.innerHTML = `₩ ${total}`
    })
}

function addItem(orderArray){
        const orderList = document.querySelector('#orderList')
        const orderItem =  document.createElement('li')
        const foodName = document.createElement('span')
        const foodPrice = document.createElement('span')
        const foodAmount = document.createElement('span')
        orderList.classList.add("orderItem")
        orderList.append(orderItem)
        orderItem.append(foodName)
        orderItem.append(foodPrice)   
        orderItem.append(foodAmount)
        foodName.append(orderArray.name)
        foodPrice.append(orderArray.price)
        foodAmount.append(orderArray.amount)
}
