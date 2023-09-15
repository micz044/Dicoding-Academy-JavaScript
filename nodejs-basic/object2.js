// ini merupakan contoh penggunaan function costructor 
class Mail {
    constructor(sender,reveicer,subject,body){
        this.sender = sender;
        this.reveicer = reveicer;
        this.subject = subject;
        this.body = body;
        this._senderId = `${sender}${Math.floor(Math.random() * 100 ) + 2}`;
    }
    get senderId(){
        return this._senderId;
    }
    set senderId(senderId){
        console.log("tidak boleh mengubah sender Id ya");
    }
    send (){
        console.log(`pengirim dengan kode ${this.senderId} dengan nama ${this.sender} mengirim pesan kepada
        ${this.reveicer} sebuah pesan dengan subject ${this.subject} dan isinya ${this.body}`);
    }
}
const email1 = new Mail('andika','michael','aku pukul kamu','fuxck youuu')

email1.send();
console.log(email1);


//penggunaan getter dan setter agar bisa menjaga isi dari properti
class User {
    constructor(firstName,middleName,lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this._lastName = "Malamo";
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
            console.log('dilarang mengubah nama akhir dari keluarga ini!!!');
    }
    get fullName() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
    set fullName(fullName){
        const[firstName,middleName,lastName] =fullName.split(' ');
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}

const user = new User('Michael','Vincent');
console.log(user);
console.log(user.fullName);

user.fullName = 'andika pratama';
user.middleName = 'vincent';
console.log(user);
console.log(user.fullName);