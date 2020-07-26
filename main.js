//// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.getElementById('btn')
// let divA = document.getElementById('text')
// btn.addEventListener('click', event => divA.style.display = 'none')


// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn1 = document.createElement('button')
// btn1.innerText = 'hiden'
// document.body.appendChild(btn1)
// btn1.addEventListener('click', event => event.target.style.display = 'none')





// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
// //та повідомити про це користувача

// let form1 = document.createElement('form')
// form1.id="form1"
// form1.style.marginTop = '40px'
// document.body.appendChild(form1)

// let age = document.createElement('input')
// age.name = "age"
// age.placeholder = 'приймає вік людини';
// form1.appendChild(age)

// let btn2 = document.createElement('button')
// btn2.id = "btn2"
// btn2.innerText = 'перевірити вік'
// form1.appendChild(btn2)

// btn2.addEventListener('click', (event) => {
//     event.preventDefault()
//     let {target: {form}} = event
//     //(+form.age.value < 18) ? alert('Access Denied') : alert('Access is allowed')
//     if (+form.age.value < 18) alert('Access Denied')
//     else alert('Access is allowed')
//     form.age.value = ''
// })




// // - Создайте меню, которое раскрывается/сворачивается при клике
// let nav = document.createElement('nav')
// nav.className ="nav1"
// document.body.appendChild(nav)

// let btn = document.createElement('span')
// btn.textContent = 'Cвернуть'
// btn.style.background = "red"
// btn.style.margin = "10px"
// btn.style.padding = "10px"
// nav.appendChild(btn)

// btn.addEventListener( 'click', (e) => {
//     let {target} = e
//     nav.classList.toggle('toggle') ? target.textContent = 'Развернуть' :  target.textContent = 'Cвернуть'
// })

// for (let index = 0; index < 4; index++) {
//     let a = document.createElement('a')
//     a.style.margin = "10px"
//     a.style.padding = "10px"
//     a.style.background = "green"
//     a.textContent = index
//     nav.appendChild(a)
// }




// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let wraper = document.createElement('div')
// wraper.style.textAlign = 'center'
// document.body.appendChild(wraper)

// for (let index = 0; index < 10; index++) {
//     let wraper_ = document.createElement('div')
//     wraper_.style.marginTop = '20px'
//     wraper_.style.width = '300px'
//     wraper_.style.height = '40px'
//     wraper.appendChild(wraper_)

//     let title = document.createElement('div')
//     title.textContent = `lorem ${index}`

//     let x = document.createElement('span')
//     x.textContent = `X`
//     x.style.float = 'right'

//     let body = document.createElement('div')
//     body.textContent = `lorem ipsum dolo sit ameti ${index}`

//     wraper_.appendChild(title)
//     wraper_.appendChild(x)
//     wraper_.appendChild(body)
// }

// wraper.addEventListener('click', (e) => {
//     let {target} = e
//     if(target.textContent === "X") {
//         target.nextElementSibling.classList.toggle('toogle-comment-body')
//     }
// })




// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form_1 = document.createElement('form')
// form_1.id="form_1"
// form_1.style.marginTop = '40px'
// document.body.appendChild(form_1)

// let login_1 = document.createElement('input')
// login_1.name = "login"
// form_1.appendChild(login_1)

// let password_1 = document.createElement('input')
// password_1.name = "password"
// form_1.appendChild(password_1)

// let form_2 = document.createElement('form')
// form_2.id="form_2"
// form_2.style.marginTop = '40px'
// document.body.appendChild(form_2)

// let login_2 = document.createElement('input')
// login_2.name = "login"
// form_2.appendChild(login_2)

// let password_2 = document.createElement('input')
// password_2.name = "password"
// form_2.appendChild(password_2)



// let btn_1 = document.createElement('button')
// btn_1.id = "btn2"
// btn_1.innerText = 'перевірити форми'
// document.body.appendChild(btn_1)

// btn_1.addEventListener('click', (e) => {
//     let {form_1, form_2} = document.forms
//     console.log(`form_1 ----> ${form_1.login.value} - login, ${form_1.password.value} - password`)
//     console.log('------------------------------------------------------------------------------')
//     console.log(`form_2 ----> ${form_2.login.value} - login, ${form_2.password.value} - password`)
// })




// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.
// const table = (rows, columns, elem) => {
//     const userElement = document.createElement(`${elem}`)
//     document.body.appendChild(userElement)
//     const t = document.createElement('table')
//     userElement.appendChild(t)
    
//     for (let index = 0; index < rows; index++) {
//         let r = document.createElement('tr')
//         t.appendChild(r)
//         for (let i = 0; i < columns; i++) {
//             let c = document.createElement('td')
//             c.innerText = i
//             r.appendChild(c)
//         }
//     }
// }
// table(4, 6, 'div')




// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)

// let form_3 = document.createElement('form')
// form_3.id="form_3"
// form_3.style.marginTop = '40px'
// document.body.appendChild(form_3)

// let input_1 = document.createElement('input')
// input_1.name = "input_1"
// input_1.placeholder = "кількість рядків"
// form_3.appendChild(input_1)

// let input_2 = document.createElement('input')
// input_2.name = "input_2"
// input_2.placeholder = "кількість ячеєк"
// form_3.appendChild(input_2)

// let input_3 = document.createElement('input')
// input_3.name = "input_3"
// input_3.placeholder = "вмиіст ячеєк."
// form_3.appendChild(input_3)

// let btn_3 = document.createElement('button')
// btn_3.textContent = "go"
// form_3.appendChild(btn_3)

// btn_3.addEventListener('click', (e) => {
//     e.preventDefault()
//     let {target: {form: {input_1, input_2, input_3}}} = e
    
//     const table = (rows, columns, descColumns) => {
//         const t = document.createElement('table')
//         document.body.appendChild(t)
        
//         for (let index = 0; index < rows; index++) {
//             let r = document.createElement('tr')
//             t.appendChild(r)
//             for (let i = 0; i < columns; i++) {
//                 let c = document.createElement('td')
//                 c.innerText = descColumns
//                 r.appendChild(c)
//             }
//         }
//     }
//     table(input_1.value, input_2.value, input_3.value)
// })



// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then(response => response.json())
//   .then(json => {
//       let main = document.createElement('div')
//       main.id = 'main'
//       document.body.appendChild(main)
      
//       let divIMG = document.createElement('div')
//       divIMG.id = 'wraperIMG'
//       main.appendChild(divIMG)

//       let btn22 = document.createElement('button')
//       btn22.textContent = 'prev'
//       main.appendChild(btn22)
      
//       let btn11 = document.createElement('button')
//       btn11.textContent = 'next'
//       main.appendChild(btn11)


//       for (let index = 0; index < json.length; index++) {
//           const element = json[index];
//           let img = document.createElement('img')
//           img.src = element.thumbnailUrl
          
//           if(index !== 0 ) img.classList.add('imgNone')
//           divIMG.appendChild(img)
//       }

//       let count = 0
//       main.addEventListener('click', (e) => {
//           let {target} = e

//           let curentImage = divIMG.children[count]

//           if (target.textContent === 'next') {
//               curentImage.classList.toggle('imgNone')
//               if(curentImage.nextElementSibling){
//                 curentImage.nextElementSibling.classList.toggle('imgNone')
//                 count++
//               }else{
//                 curentImage.parentElement.firstChild.classList.toggle('imgNone')
//                 count = 0
//               }
//           }
//           if(target.textContent === 'prev') {
//             curentImage.classList.toggle('imgNone')
//             if(curentImage.previousElementSibling){
//                 curentImage.previousElementSibling.classList.toggle('imgNone')
//                 count--
//             }else{
//                 curentImage.parentElement.lastChild.classList.toggle('imgNone')
//                 count = curentImage.parentElement.children.length - 1
//             }
//           }
//         })

      
//     })





// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// let divW = document.createElement('div')
// divW.style.marginTop = '100px'
// document.body.appendChild(divW)

// let inputText = document.createElement('input')
// inputText.name = "inputText"
// inputText.placeholder = "введiть не цензурне слово"
// divW.appendChild(inputText)

// let btnCheck = document.createElement('button')
// btnCheck.textContent = 'перевирка тексту'
// divW.appendChild(btnCheck)

// let arr = ['a', 'b', 'c', 'd']

// btnCheck.addEventListener('click', (e) => {
//     let inp = document.querySelector('input[name="inputText"]')
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(inp.value === element) return alert(`${inp.value} - це МАТЮК!!!`)
//     }
// })





// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let divF = document.createElement('div')
// divF.style.marginTop = '100px'
// document.body.appendChild(divF)

// let inputText1 = document.createElement('input')
// inputText1.name = "inputText"
// inputText1.placeholder = "введiть не цензурне слово"
// divF.appendChild(inputText1)

// let btnCheck1 = document.createElement('button')
// btnCheck1.textContent = 'перевирка тексту'
// divF.appendChild(btnCheck1)

// let arr33 = ['потрібно', 'перевіряти', 'чи', 'не', 'містить', 'ціле', 'речення', 'в', 'собі', 'погані', 'слова']

// btnCheck1.addEventListener('click', () => {
//     let inp = document.querySelector('input[name="inputText"]')
//     for (let index = 0; index < arr33.length; index++) {
//         const element = arr33[index];
//         let matyk = inp.value.toLocaleLowerCase().indexOf(element)
//         if (matyk > -1) return alert(`${element} - це МАТЮК!!!`)
//     }
// })





// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let wraper = document.createElement('div')
// wraper.style.width = '500px'
// wraper.style.marginTop = '100px'
// wraper.style.display = 'flex'
// document.body.appendChild(wraper)


// let diFF = document.createElement('div')
// diFF.style.width = '200px'
// wraper.appendChild(diFF)


// let hOne = document.createElement('h1')
// hOne.id = 'h1'
// hOne.innerText = 'Lorem ipsum dolor sit amet. 1'
// diFF.appendChild(hOne)

// let pFF = document.createElement('p')
// pFF.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate veritatis dolorum, 
// itaque quo accusamus temporibus facilis perferendis veniam, ducimus inventore maxime ipsum dolorem, eveniet sapiente officia? Eveniet, dolor impedit.`
// diFF.appendChild(pFF)

// let hTwo = document.createElement('h2')
// hTwo.id = 'h2'
// hTwo.innerText = 'Lorem ipsum dolor sit amet. 2'
// diFF.appendChild(hTwo)

// let pFF1 = document.createElement('p')
// pFF1.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate veritatis dolorum, 
// itaque quo accusamus temporibus facilis perferendis veniam, ducimus inventore maxime ipsum dolorem, eveniet sapiente officia? Eveniet, dolor impedit.`
// diFF.appendChild(pFF1)

// let hThree = document.createElement('h3')
// hThree.id = 'h3'
// hThree.innerText = 'Lorem ipsum dolor sit amet. 3'
// diFF.appendChild(hThree)

// let pFF2 = document.createElement('p')
// pFF2.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate veritatis dolorum, 
// itaque quo accusamus temporibus facilis perferendis veniam, ducimus inventore maxime ipsum dolorem, eveniet sapiente officia? Eveniet, dolor impedit.`
// diFF.appendChild(pFF2)

// let hFour = document.createElement('h4')
// hFour.id = 'h4'
// hFour.innerText = 'Lorem ipsum dolor sit amet. 4'
// diFF.appendChild(hFour)

// let pFF3 = document.createElement('p')
// pFF3.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate veritatis dolorum, 
// itaque quo accusamus temporibus facilis perferendis veniam, ducimus inventore maxime ipsum dolorem, eveniet sapiente officia? Eveniet, dolor impedit.`
// diFF.appendChild(pFF3)


// const menu = (() => {
//     let nav = document.createElement('div')
//     nav.style.width = '340px'
//     wraper.appendChild(nav)

//     let h = document.querySelectorAll('h1,h2,h3,h4')
//     for (let index = 0; index < h.length; index++) {
//         const element = h[index];
//         let a = document.createElement('a')
//         a.style.padding = '10px'
//         a.style.display = 'block'
//         a.href = `#${element.id}`
//         a.innerText = element.textContent
//         nav.appendChild(a)
//     }
// })()







// // -- взять массив пользователей
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ

// let diV = document.createElement('div')
// diV.style.marginTop = '100px'
// document.body.appendChild(diV)


// let checkBox = document.createElement('input')
// checkBox.type = "checkbox"
// checkBox.value = 'status'
// diV.appendChild(checkBox)

// let label = document.createElement('label')
// label.for = 'status'
// label.textContent = 'status'
// diV.appendChild(label)

// let checkBox1 = document.createElement('input')
// checkBox1.type = "checkbox"
// checkBox1.value = 'age'
// diV.appendChild(checkBox1)

// let label1 = document.createElement('label')
// label1.for = 'age'
// label1.textContent = 'age'
// diV.appendChild(label1)

// let checkBox2 = document.createElement('input')
// checkBox2.type = "checkbox"
// checkBox2.value = 'city'
// diV.appendChild(checkBox2)

// let label2 = document.createElement('label')
// label2.for = 'city'
// label2.textContent = 'city'
// diV.appendChild(label2)

// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];

// const resultFiltered = (inputValue) => {
//     switch(inputValue) {
//         case 'status':
//             return usersWithAddress.filter(el => !el.status)
//         case 'age':
//             return  usersWithAddress.filter(el => el.age >=29)
//         case 'city':
//             return usersWithAddress.filter(el => el.address.city == 'Kyiv')
//     }
// }

// const recurs = (obj, el) => {
//     for (const key in obj) {
//         if(typeof obj[key] === 'object') {
//             return recurs(obj[key], el)
//         }
//         let span = document.createElement('div')
//         span.innerText = `${key} - ${obj[key]}`
//         el.appendChild(span)
//     }
// }

// diV.addEventListener('click', (e) => {
//     const {target} = e
//     if(target.checked) {
//         let userFiltered = resultFiltered(target.value)
        
//         target.disabled = true
//         let wraperUserFiltered = document.createElement('div')
//         wraperUserFiltered.innerText = `---------сортировка по--${target.value}-------------------`
//         wraperUserFiltered.style.marginTop = '40px'
//         diV.appendChild(wraperUserFiltered)

//         for (let index = 0; index < userFiltered.length; index++) {
//             const obj = userFiltered[index];
    
//             let div = document.createElement('div')
//             wraperUserFiltered.appendChild(div)
            
//             recurs(obj, div)
//         }
//     }
// })



// // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let nextBTN = document.createElement('button')
// nextBTN.innerText = 'next'
// nextBTN.style.marginTop = '100px'
// nextBTN.style.display = 'block'
// document.body.appendChild(nextBTN)

// let prevBTN = document.createElement('button')
// prevBTN.innerText = 'prev'
// document.body.appendChild(prevBTN)

// let wraper1 = document.createElement('div')
// document.body.appendChild(wraper1)

// for (let index = 0; index < 10; index++) {
//     const element = document.createElement('div')
//     element.innerHTML = `div - ${index}`
//     wraper1.appendChild(element)
    
//     for (let i = 0; i < 10; i++) {
//         const element_ = document.createElement('div')
//         element_.innerHTML = `div - ${i}`
//         element_.style.marginLeft = '100px'
//         element.appendChild(element_)
//         for (let i = 0; i < 10; i++) {
//             const element__ = document.createElement('div')
//             element__.innerHTML = `div - ${i}`
//             element__.style.marginLeft = '100px'
//             element_.appendChild(element__)
//         }
//     }
// }


// const handlerNext = (element) => {
//     element.classList.remove('active')
//     if (element.firstElementChild) {
//         element.firstElementChild.classList.add('active')
//         return element.firstElementChild
//     }
//     if (element.nextElementSibling) {
//         element.nextElementSibling.classList.add('active')
//         return element.nextElementSibling
//     }
//     element.parentElement.nextElementSibling.classList.add('active')
//     return element.parentElement.nextElementSibling
// }

// const handlerPrev = (element) => {
//     element.classList.remove('active')
//     if (element.previousElementSibling) {
//         element.previousElementSibling.classList.add('active')
//         return element.previousElementSibling
//     }
//     if(element.parentElement.previousElementSibling){
//         element.parentElement.previousElementSibling.classList.add('active')
//         return element.parentElement.previousElementSibling
//     }
//     element.parentElement.classList.add('active')
//     return element.parentElement
// }

// let activeElement;
// nextBTN.addEventListener('click', (e) => {
//     activeElement = handlerNext(activeElement ? activeElement : wraper1)
// })
// prevBTN.addEventListener('click', (e) => {
//     activeElement = handlerPrev(activeElement ? activeElement : wraper1)
// })






// //*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let p5 = document.createElement('p')
// p5.innerText = 'При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан'
// document.body.appendChild(p5)

// p5.addEventListener('mouseup', (e) => {
//     let {anchorOffset, focusOffset} = window.getSelection()
//     console.log(anchorOffset, focusOffset, e.target)

//     let range = new Range()
//     range.setStart(e.target.firstChild, anchorOffset);
//     range.setEnd(e.target.lastChild, focusOffset);
    
//     let oldText = range.extractContents()
//     let newText = document.createElement('b')
//     newText.textContent = oldText.textContent
    
//     range.insertNode(newText)
//     console.log(oldText)
// })