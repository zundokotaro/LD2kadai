
//forを使ったループ構文、配列とともに

const animals = ['cat', 'dog', 'rabbt', 'lion', 'snake', 'cow']

for (let i = 0; i < animals.length; i = i + 1){
    const animal = animals[i]
    console.log((i+1) + '番目の動物は' + animal + 'です。')
}　

//keysの例文

const robot = {
    name: 'popo',
    age: 4,
    sex: 'male'
}
console.log(robot)
console.log(Object.keys(robot))