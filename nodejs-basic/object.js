const profile = {
    "nama" : "michael",
    "umur" : 21,
    "nim"  : 205010
}

console.log(profile.nama);
console.log(profile.umur);
console.log(profile.nim);


class Mahasiswa {
    constructor(nama, nim, asal) {
        this.nama = nama;
        this.nim = nim;
        this.asal = asal;
    }


profile () {
    console.log(`maba tahun ini bernama ${this.nama}, dengan nim ${this.nim} dan berasal dari ${this.asal}`);
    }
}

const mahasiswa1 = new Mahasiswa('michael',205010,'batam');

console.log(mahasiswa1);
console.log(typeof(Mahasiswa));
mahasiswa1.profile()

