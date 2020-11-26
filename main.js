// Initialize new class to create object Lamp and Switch
class Lamp {
    constructor() {
        this.on = 'on_lamp.jpg';
        this.off = 'off_lamp.png';
        this.statusLamp = false;
    }
    showLamp () {
        if (this.statusLamp == true){
            return '<img id="lamp" src="'+ this.on + '" alt="" width="300" height="200">' ;
        }
        else return '<img id="lamp" src="'+ this.off + '" alt="" width="300" height="200">' ;
    }
}

class Switch {
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }
    connectToLamp (lamp){
        this.lamp = lamp;
    }
    switchButton () {
        if (this.status == false){
            this.status = true;
            this.lamp.statusLamp = true;
        } else if (this.status == true){
            this.status = false;
            this.lamp.statusLamp = false;
        }

    }
}
//*****************************

//*** Creat object Lamp and Switch
let lamp = new Lamp();
let switchBtn = new Switch();
//********************************

switchBtn.connectToLamp(lamp);
function switchElectric () {
    switchBtn.switchButton();
    document.getElementById('lamp').innerHTML = lamp.showLamp();
}
document.getElementById('lamp').innerHTML = lamp.showLamp();