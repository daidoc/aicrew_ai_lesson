console.log('hello world!!')

const dog = '犬'
console.log(dog)

const animals = [
    '犬',
    '猫',
    'インコ',
]
console.log(animals)
console.log(animals[0])

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

// 以下は全て同じ
// index = index +1
// index += 1
// index++
for (let index = 0; index < animals.length; index++) {
    console.log('ループ : ' + animals[index])
}

const cost = [
    100,
    200,
    500,
    1000
]
let total = 0
for (let index = 0; index < cost.length; index++) {
    total += cost[index]
    if (total <= 800) {
        console.log('合計金額 : ' + total + '円')
    }
}

const drinkCost = [
    100,
    120,
    150,
    200
]
let totalCost = 0
for (let index = 0; index < drinkCost.length; index++) {
    totalCost += drinkCost[index]
    if (totalCost < 400) {
        console.log('合計金額 : ' + totalCost + '円')
    }
}

costCalculate(cost, 500)
function costCalculate(costs, maxValue) {
    let totalValue = 0
    for (let index = 0; index < costs.length; index++) {
        totalValue += costs[index]
        if (totalValue < maxValue) {
            console.log('(関数)合計金額 : ' + totalValue + '円')
        }
    }
}