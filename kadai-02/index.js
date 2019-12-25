const firstName = 'Taro'
const secondName = 'Zundoko'
console.log(firstName + secondName)

const sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(sum)

const hasDog = false
const hasCat = true

//犬か猫を飼っている
console.log(hasDog || hasCat)
//犬も猫も飼っている
console.log(hasDog && hasCat)
//犬も猫も飼っていない
console.log(!hasDog && !hasCat)

const talkKing = true
const talkSlime = true

//王様またはスライムと話している
console.log(talkKing || talkSlime)
//王様ともスライムとも話している
console.log(talkKing && talkSlime)
//王様ともスライムとも話していない
console.log(!talkKing && !talkSlime)
//王様とは話しているがスライムとは話していない
console.log(talkKing && !talkSlime)