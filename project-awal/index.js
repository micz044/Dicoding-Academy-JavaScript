import {isCoffeManchineReady,coffeeStock as stock} from './state.js';
 
console.log(stock);
console.log(isCoffeManchineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
      console.log("Kopi berhasil dibuat!");
    } else {
      console.log("Biji kopi habis!");
    }
  }
   
  makeCoffee("liberica", 80);
   