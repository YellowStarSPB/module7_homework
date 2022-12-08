//===Задание 1=====
const person2 = {
    name: 'Oleg',
    lstName: 'Vasilev'
}

function getKeyOfObj (obj) {
    for (let key in obj){
        if(obj.hasOwnProperty(key))
        console.log(key)
    }
}
getKeyOfObj(person2)


//==========Задание 2========
const person3 = {
    name: 'Oleg',
    lstName: 'Vasilev'
}

function getMeaning(string, obj){
    for (let key in obj){
        if(key === string){
            return console.log('true')
        } else{
            return console.log('false')
        }
    }
}
getMeaning("name", person3)



//====Задание 3 ======
const newObj = () => new Object();

console.log(newObj())

//====== Задание 4 ====
let wattsDevice = 0;


//======Прототип девайсов
function Device(wattsOn, wattsOff, name){
    this.wattsOn = wattsOn,
    this.wattsOff = wattsOff,
    this.name = name,
    this.connect = false,
    this.powerOn = function() {
        console.log(`${this.name} подключен к электросети ${this.wattsOn}`);
        this.connect = true;
        return wattsDevice += this.wattsOn
    }
    this.powerOff = function() {
        console.log(`${this.name} не подключен к электросети ${this.wattsOff}`);
        this.connect = false;
        return wattsDevice -= this.wattsOn
    }
}

function getTotalWatt(){
    console.log(`Потребляемая мощность включенных в сеть приборов - ${wattsDevice} Ватт`)
}

function MyDevice(color, height){
    this.color = color,
    this.height = height
}

const tableLamp = new Device(200, 0, 'Best Lamp');
const desktopComputer = new Device(650, 0, 'Acer');

tableLamp.prototype = new MyDevice('black', 100)
desktopComputer.prototype = new MyDevice('white', 200)


tableLamp.powerOn()
getTotalWatt()
tableLamp.powerOff()
getTotalWatt()



//=== Задание 5====
let wattsDevice = 0;

// Родительский класс
class Device{
    constructor(wattsOn, wattsOff, name, connect){
        this.wattsOn = wattsOn,
        this.wattsOff = wattsOff,
        this.name = name,
        this.connect = connect,
        this.powerOn = function() {
            console.log(`${this.name} подключен к электросети ${this.wattsOn}`);
            
            return wattsDevice += this.wattsOn
        }
        this.powerOff = function() {
            console.log(`${this.name} не подключен к электросети ${this.wattsOff}`);
            
            return wattsDevice -= this.wattsOn
        }
    }
}

class MyGadjet extends Device {
    constructor(color, height, wattsOn, wattsOff, name, connect) {
        super(wattsOn,wattsOff, name, connect);
        this.color = color;
        this.height = height;
    }
    isConnected() {
        if(this.connect){
            this.powerOn()
            getTotalWatt()
        } else {
            this.powerOff()
        }
    }
}

function getTotalWatt(){
    console.log(`Потребляемая мощность включенных в сеть приборов - ${wattsDevice} Ватт`)
}

const tableLamp = new MyGadjet('black', 200, 250, 0, 'Super Lamp', true);
const laptop = new MyGadjet('black', 200, 400, 0, 'Lenovo', true);

tableLamp.isConnected()
laptop.isConnected()
