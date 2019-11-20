
//課題５

const profile = {
    name: "ZundokoTaro",
    age: 5,
    major: 'Magic',
    hobby: 'game',
    job: 'Magic layer',
    families: '2 brothers',
    pets:{
        name:'Popo',
        age:12
    }
}

const keys = Object.keys(profile)

for (let  i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    const value = profile[key];
    const text = '私の'　+ key + 'は、' + value + 'です。'
    console.log(text);
}

// of キーワードでより簡単にループができる！
for(let key of keys){
    const value = profile[key];
    const text = '私の' + key + ' は、' + value + 'です。'
    console.log(text);
}