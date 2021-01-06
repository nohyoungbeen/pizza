// const container = document.getElementById('menuListOrder')
// const menuList = document.querySelector('#menuList')
// const eachItem = document.createElement('div')
// eachItem.className = 'eachItem'
// const itemImage = document.createElement('img')
// const itemName = document.createElement('p')
// const itemPrice = document.createElement('p')
// const addButton = document.createElement('button')

// container.append(menuList)
// menuList.append(eachItem)
// eachItem.append(itemImage)
// itemImage.src="images/pizza1.png"
// eachItem.append(itemName)
// itemName.append('메뉴이름')
// itemPrice.append('가격')
// eachItem.append(itemPrice)
// eachItem.append(addButton)
// addButton.append('추가')

// html 태그를 추가하는 방법
// 1. innerHTML : 간편하지만 이벤트 연결했던게 모두 초기화됨 
// 2. createElement , append : 복잡하지만 이벤트가 유지됨
// minipost innerHTML + createElement


// selectAjax()

// setTimeout -> render

setTimeout(function() {// ajax -> success
    for(let i = 0 ; i < food.length; i++ ){
        render(food[i])
    }
    // const obj = {
    //     inputName: 'input1',
    //     buttonName: 'button1'
    // }
    // render(data[0]) 
    // render(data[1])
    // render(data[2])
    // render(data[3])
    // render(data[4])
}, 2000)

const food = [
        {
            image : "pizza1.png", 
            name : "pizzaOne",
            price : "20000"
        },
        {
            image : "pizza2.png", 
            name : "pizzaOne",
            price : "20000"
        },
        {
            image : "pizza3.png", 
            name : "pizzaOne",
            price : "20000"
        },
] // 값을 넣어주세요
const menuList = document.querySelector('#menuList')
function render(food){
    const eachItem = document.createElement('div')
    eachItem.className = "eachItem"
    menuList.append(eachItem)
    eachItem.innerHTML += `
            <img class="list" src="images/${food.image}" alt="food-image">
            <p>${food.name}</p>
            <p>${food.price}</p>
            <button class="addButton">ADD CART</button>`
}


// 1. createElement로 div 태그 만들기
// 2. 만든 div에다가 innerHTML로 내용 넣기
// 3. div태그를 append로 붙여넣기
