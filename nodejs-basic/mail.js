// ini merupakan superclass

class Mail {
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message,reveicer){
        console.log(`${this.sender} mengirim pesan ${message} kepada ${reveicer}`);
    }
}

class WhatsAppService extends Mail{
    constructor(sender,isBusiness){
        super(sender);
        this.isBusiness = isBusiness;
    }
    sendBroadcastMessage (message,receiver){
        for(const receiver of receivers){
            this.sendMessage(message,receiver)
        }
    }
}


class EmailService extends Mail{
    sendDelayedMessage(message,reveicer,delay){
        setTimeout(() => {
            this.sendMessage(message,reveicer)
        }, delay)
    }
}

const WhatsApp = new WhatsAppService('+623344532244',true);
const Email = new EmailService ('michael@gmail.com');

WhatsApp.sendMessage('hello','+623443433455');
Email.sendMessage('hallo gess','andika@dicoding.com');

console.log(WhatsApp);