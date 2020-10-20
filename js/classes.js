'use strict';

class Rectangle {
    constructor(height, width){
        this.height =  height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor ){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "Hello World", 'red');
div.showMyProps();
console.log(div.calcArea());



class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.transfer = 27;
        this.classes = classes;
        this.changeToUAH();
        this.parent = document.querySelector(parentSelector);
    }
    changeToUAH(){
        this.price = +this.price * this.transfer;
    }
    render(){
        const element = document.createElement('div');
        if (this.classes.length === 0){
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div></div>`;

        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy", 
    'Меню "Фитнес"',
    "Меню 'Фитнес' - это новый подход к приготовлению блюд",
    9,
    ".menu .container"
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite", 
    'Меню "Премиум"',
    "В меню “Премиум” мы используем не только красивый дизайн тельный подбор ингреди тельный подбор ингреди тельный подбор ингреди тельный подбор ингреди тельный подбор ингреди",
    19,
    ".menu .container",
    'menu__item',
    'big'
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post", 
    'Меню "Постное"',
    "Меню 'Постное' - это тщательный подбор",
    19,
    ".menu .container",
    'menu__item',
    'big'
).render();
