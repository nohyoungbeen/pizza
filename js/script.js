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
// function setTimeout(){
// for(let i = 0; i < render.length; ++i){
//         render()
//     }
// },500)

const orderArray = [
] 


for(let i = 0; i < foodArray.length; ++i){
    render(foodArray[i])
}

function render(foodObject){
    const menuList = document.querySelector('#menuList')
    const eachItem = document.createElement('div')
    menuList.append(eachItem)
    const foodImage = document.createElement('img')
    foodImage.classList.add('list')
    foodImage.src = "images/" + foodObject.image
    foodImage.alt = "food-image"
    eachItem.append(foodImage)
    foodImage.append(foodObject.image)

    const foodName = document.createElement('p')
    eachItem.append(foodName)
    foodName.append(foodObject.name)

    const foodPrice = document.createElement('p')
    eachItem.append(foodPrice)
    foodPrice.append(foodObject.price)

    const addButton = document.createElement('button')
    eachItem.append(addButton)
    addButton.append("주문목록에 추가")

    addButton.addEventListener('click', function(){
        addCart(foodObject)
    })
}

function addCart(foodObject){
    const orderList = document.querySelector('#orderList')
    const orderItem = document.createElement('li')
    orderList.append(orderItem)
    const foodName = document.createElement('span')
    orderItem.append(foodName)
    const foodPrice = document.createElement('span')
    orderItem.append(foodPrice)
    const foodAmount = document.createElement('span')
    orderItem.append(foodAmount)
    foodName.append(foodObject.name)
    foodPrice.append(foodObject.price)
    foodAmount.append(1)
    const foodInfo = {name:foodObject.name, price:foodObject.price, amount: 2}
    // orderArray -> object(name, price, amount) push
    orderArray.push(foodInfo)
    console.log(orderArray)

    const totalPrice = document.querySelector('#totalPrice')
    totalPrice.innerHTML = foodInfo.price * foodInfo.amount
}