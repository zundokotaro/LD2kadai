
//配列について・メソッドについて(pushは追加、popは削除)

const animals = ['cat', 'dog', 'rabbit', 'lion']
console.log(animals)
console.log(animals[2])

animals.push('bird')
console.log(animals)

const last = animals.pop()
console.log(last)
console.log(animals)

//正しい？おかしい？～オブジェクトにおけるメモリの参照の保存～

const a = {x:1, y:2}
const b = a
b.x = 100
console.log(a)

//あらかじめ別の変数も宣言しておくと◎
const c = [1,2,3,4,5]
const d = [1,2,3,4,5]
d[3] = 10000
console.log(c)
console.log(d)