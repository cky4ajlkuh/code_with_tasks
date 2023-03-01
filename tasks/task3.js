// 3. Создать класс данных “Товар”
// С полями
// Название
// Цена
// Количество
// Описание

class Product {
    name;
    price;
    quantity;
    description;

    constructor(name, price, quantity, description) {
        this.name = name
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let apples = new Product('яблоко', 55, 10, 'красный');
let bananas = new Product('банан', 120, 4, 'желтый')
let tangerines = new Product('мандарин', 80, 15, 'оранжевый')

let array = [apples, bananas, tangerines];

function func(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push("name-contains-" + array[i].name + "&price-=" + array[i].price + "&quantity->" + array[i].quantity +
            "description-ends-" + array[i].description);
    }
    return arr;
}

console.log(func(array))