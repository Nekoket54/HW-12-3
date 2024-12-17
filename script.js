//№1
const products = [
    {
        name: 'Microwave',
        price: 293,
        category: "Electronics",
        stock: 20
    },
    {
        name: 'Curlers',
        price: 204,
        category: "Electronics",
        stock: 17
    },
    {
        name: 'Fridge',
        price: 954,
        category: "Electronics",
        stock: 10
    },
    {
        name: 'TV',
        price: 789,
        category: "Electronics",
        stock: 10
    }
];

function grade(students) {
    let totalGrade = 0;
    for (let index = 0; index < students.length; index++) {
        console.log(students[index]);
        totalGrade += students[index].price;
    }
    return totalGrade
}

console.log(grade(products));



// №2



// №3



//№4
const person = {
    firstName: `Богдан`,
    lastName: `Дістанов`,
    fullName(){
        return `${this.firstName} ${this.lastName}`
    },
}
alert(person.fullName())



//№5
const product = {
    name: 'book',
    price: 58,
    quantity: '100',
    purchase(){
        alert(`товар:${this.name}, ціна:${this.price}, кількість:${this.quantity}`)
        let userQuantity = prompt('оберіть кількість')
        let total = 58 * userQuantity
        confirm(`сума до сплати:${total}$`)
        
       return alert('дякую за замовлення')
    }
}
product.purchase()



//№6