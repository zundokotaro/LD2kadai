// ターミナルでmodule.exports

const a = require('./module-a.js')

a()

//module-aで定義したものがindex.jsにexportされている

const b = require('./module-b.js')
b()

//関数ではなくても、定義したものは自由にexportできる

const c = require('./module-c.js')
console.log(c)

//npmで様々なモジュールパッケージが使える！