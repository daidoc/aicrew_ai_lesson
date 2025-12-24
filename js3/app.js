const dog = {
    name: '太郎',
    age: 5,
    weight: 13,
    size: '70cm',
    weightup: function() {
        console.log(this.weight += 2)
    }
}
console.log(dog.weight)
dog.weightup()

const content = document.querySelector('#weight-content')
content.innerText = dog.name + 'は' + dog.age + '歳'

function ageUp() {
    age = dog.age++
    console.log(age)

    if (age > 14) {
        content.innerText = dog.name + 'は老衰してしまった。生きていれば' + age + '歳'
        return
    }

    content.innerText = dog.name + 'は' + age + '歳'
}