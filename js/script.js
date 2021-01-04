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
//container.className = 'menuListOrder'
const container = document.querySelector('#menuListOrder')
container.className = 'menuListOrder'

function render(food){
const menuList = document.createElement('div')
container.append(menuList)
container.innerHTML += `
<div id="menuList">
    <div class="eachItem">
        <img class="list" src="images/${food.image}" alt="food-image">
        <p>${food.name}</p>
        <p>${food.price}</p>
        <button class="addButton">ADD CART</button>
    </div>
</div>`
}



setTimeout(function() {// ajax -> success
    const orderList = document.createElement('div')
    container.append(orderList)
    container.innerHTML += `
    <div id="orderList">
        <h2>Your Oder</h2>
        <div class="totalPrice">
            <div>Total</div>
            <div>₩50,000</div>
        </div>
        <div id="orderProductInfo">
            <div>피자이름</div>
            <div>피자가격</div>
            <div>
                <select>
                    <option name="" id="" aria-placeholder="1">1</option>
                </select>
            </div>
            <div><button id="subtracItem">-</button></div>
        </div>
        <button id="orderButton" name="orderButton" type="submit">PAYMENT</button>
    </div>`
}, 2000)
// 1. createElement로 div 태그 만들기
// 2. 만든 div에다가 innerHTML로 내용 넣기
// 3. div태그를 append로 붙여넣기

git config --global user.email "nyb0813@naver.com"
git config --global user.name "nohyoungbeen"

email이랑 name을 변경해주세요!