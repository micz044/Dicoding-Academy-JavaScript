const user = {
    id: 1,
    displayName : "Andika",
    fullName : "Andika Pratama"
};

function introduce({displayName, fullName}){
    console.log(`${displayName} nama lengkapnya adalah ${fullName}`);
}


introduce(user);


function sum(...angka) {
    let result = 0;
    for(let number of angka){
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5,6));

const sayName = (nama,umur) => {
    console.log(`halo nama saya ${nama}, dan saya berumur ${umur}`);
}

sayName("Michael",21);


const nama =() => console.log('Selamat pagi semuanya');

nama()

