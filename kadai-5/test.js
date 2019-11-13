
//オブジェクトについて（辞書みたいなもの！）

const person = {
    name: 'poke',
    age:20,
    gender: 'female',
    game: {
        name: "PlayStation4",
        color: "white"
    }
}

console.log(person.name)
console.log(person.game["name"])
console.log(person)

//deleteを使うと削除もできる
delete person.age
console.log(person)