function multiply(a,b){
    return a*b;
}

let result = multiply(1,1)
console.log(result);

function greeting(){
    console.log("hello");
}

greeting()

function sapa(nama, bahasa){
    if (bahasa === "english") {
        console.log(`Good Morning ${nama}`);
    }else if(bahasa === "indonesia"){
        console.log(`Selamat Pagi ${nama}`);
    }else{
        console.log("Ini bahasa apa su!!!!");
    }
}

sapa("michel","english")

//Quis 1
function minimal(a,b) {
    if (a < b ) {
       console.log(a);;
    }else if (b < a){
        console.log(b);;
    }else{
        console.log(a);;
    }
}

minimal(2,3);
minimal(10,5);

//Quis 2
function findIndex(arr, number) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
        return i; // Mengembalikan indeks jika angka ditemukan
      }
    }
    return -1; // Mengembalikan -1 jika angka tidak ditemukan
  }
  
  // Contoh penggunaan fungsi findIndex
  console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
  console.log(findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
  console.log(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4
  

