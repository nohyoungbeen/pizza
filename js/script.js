const foodArray = [
        {
            id : "1",
            image : "pizza1.png", 
            name : "pizzaOne",
            price : "10000",
        },
        {   
            id : "2",
            image : "pizza2.png", 
            name : "pizzaTwo",
            price : "30000",
        },
        {   
            id : "3",
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
    // {name: itemObject.name, price:itemObject.price, amount: 1}
]

for(let i = 0; i < foodArray.length; ++i ){
    render(foodArray[i])
}

function render(foodObject){
    const menuList = document.querySelector('#menuList')
    const eachItem = document.createElement('div')
    menuList.append(eachItem)
    const foodImage = document.createElement('img')
    eachItem.append(foodImage)
    foodImage.src = "images/" + foodObject.image
    foodImage.classList.add('list')
    foodImage.alt = "item-image"
    const foodName = document.createElement('span')
    eachItem.append(foodName)
    foodName.append(foodObject.name)
    const foodPrice = document.createElement('span')
    eachItem.append(foodPrice)
    foodPrice.append(foodObject.price)
    const addButton = document.createElement('button')
    eachItem.append(addButton)
    addButton.append('주문목록에 추가')

    addButton.addEventListener('click',function(){
        let result = itemCheck(foodObject.name)
        if(result == undefined){
            alert('No')
            addCart(foodObject)
        }else{
            result.amount += 1
            // console.log(result)
            const li = document.querySelector('#'+'li_'+foodObject.id)
            const amount = li.querySelector('.amount')
            amount.innerHTML = result.amount
            console.log(li)
            console.log(amount)
            alert('Yes')
            const totalPrice = document.querySelector('#totalPrice')
            totalPrice.innerHTML = getTotal()
        }
    })
}

function addCart(itemObject){
    const orderList = document.querySelector('#orderList')
    const orderItem = document.createElement('li')
    orderList.append(orderItem)
    
    const itemName = document.createElement('span')
    orderItem.append(itemName)
    orderItem.id = 'li_'+ itemObject.id
    itemName.append(itemObject.name)

    const itemPrice = document.createElement('span')
    orderItem.append(itemPrice)
    itemPrice.append(itemObject.price)

    const itemAmount = document.createElement('span')
    itemAmount.classList.add('amount')
    orderItem.append(itemAmount)
    itemAmount.append(1)
    const itemList = {name: itemObject.name, price:itemObject.price, amount: 1}
    //orderItem.innerHTML = '<span>' + itemList.name + '</span>'+'<span>'+itemList.price +'</span>'+'<span>'+itemList.amount +'</span>'
    orderArray.push(itemList)
    const totalPrice = document.querySelector('#totalPrice')
    totalPrice.innerHTML = getTotal()
}

function getTotal() {
    let result = 0
    // Number("10") // 10
    for(let i = 0 ; i < orderArray.length; ++i){
        result += Number(orderArray[i].price) * Number(orderArray[i].amount) 
    }
    return result
}

function itemCheck(value) {
    let result = orderArray.find(item => item.name == value)
    return result
}   
 

