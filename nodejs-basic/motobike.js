class Motobike {
    #chasisNumber = null; //enclosing class

    constructor(type,production,maxSpeed){
        this.type = type;
        this.production = production;
        this.maxSpeed = maxSpeed;
        this.#chasisNumber = this.#generateChasisNumber();
    }
    get chasisNumber(){
        return this.#chasisNumber;
    }

    data (){
        console.log(`motor dengan tipe ${this.type} ini merupakan produksi tahun ${this.production} dan berkecepatan maksimal ${this.maxSpeed}`);
    }

    #generateChasisNumber () {
        return `${this.type}-${Math.floor(Math.random() * 1000 ) + 2}`;
    }

    set chasisNumber(chasisNumber){
        console.log("maaf kode chasis tidak dapat diubah");
    }
}

const motor = new Motobike('Honda',2022,220);

console.log(motor);
motor.data();
