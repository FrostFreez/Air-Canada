//Nav Bar
let position = 0;
let act = null;
clearInterval(act);
function upDown(opr){
    if(position == 0){
        act = setInterval(goDown, 10);
        opr.classList.toggle("change");
    } else if(position == 15){
        act = setInterval(goUp, 10);
        opr.classList.toggle("change");
    }
}
function goDown(){
    position += 0.5;
    if(position > 15){
        clearInterval(act);
        position = 15;
    }
    document.getElementById("links").style.top = position + "vh";
}
function goUp(){
    position -= 0.5;
    if(position < 0){
        clearInterval(act);
        position = 0;
    }
    document.getElementById("links").style.top = position + "vh"; 
}
//Color Changer
function dayNight(){
    let computed = getComputedStyle(document.body);
    let root = document.querySelector(":root").style;
    let img = document.getElementById("logo");

    if(computed.getPropertyValue("--font") == "black"){
        root.setProperty("--font", "#DC143C");
    }else if(computed.getPropertyValue("--font") == "#DC143C"){
        root.setProperty("--font", "black");
    }

    if(computed.getPropertyValue("--main-bc") == "white"){
        root.setProperty("--main-bc", "black");
    }else if(computed.getPropertyValue("--main-bc") == "black"){
        root.setProperty("--main-bc", "white");
    }
}
//Review
class People {
    constructor(name, age, photo, qualities, position) {
        this.name = name;
        this.age = age;
        this.photo = photo;
        this.qualities = qualities;
        this.position = position
    }
};

const person0 = new People("Jose", 45, "https://imgur.com/q5aZozz.png", ["Sells", "Logical"], 1);
const person1 = new People("Jane", 48, "https://imgur.com/J2G5vID.png", ["Hardworking", "Communication"], 2);
const person2 = new People("Josue", 17, "https://imgur.com/dcJucdc.png", ["Programming", "Logical", "Smart"], 3);
const person3 = new People("Pedro", 14, "https://imgur.com/CrGjVfF.png", ["Jiu-Jitsu"], 4);
const person4 = new People("Samuel", 16, "https://imgur.com/NZKiRRE.png", ["Open-minded", "Smart", "Free"], 5);
const person5 = new People("Caio", 16, "https://imgur.com/nF6oF8g.png", ["Maconheiro", "Picao", "Surfista", "Skatista"], 6);
const person6 = new People("Mel", 10, "https://imgur.com/fnu9fck.png", ["No"], 7);

const people = [person0, person1, person2, person3, person4, person5, person6];
let peopleOrder = [person0, person1, person2, person3, person4, person5, person6];
let where = 0;

function changePerson(opr){
    let removable = document.getElementsByClassName("removable");
    const description = document.getElementById("descripition");
    const photo = document.getElementById("photo");
    const index = document.getElementById("index");
    where += opr;
    if(where < 0){where = peopleOrder.length - 1;}else if(where > peopleOrder.length - 1){where = 0;}
    while(removable.length > 0){
        removable[0].remove()
    }
    description.innerHTML = `${peopleOrder[where].name}, ${peopleOrder[where].age}`;
    photo.src = peopleOrder[where].photo;
    index.innerHTML = "Person n." + (peopleOrder[where].position);
    for(let x = 0; x < peopleOrder[where].qualities.length; x++){
        let q = document.createTextNode(peopleOrder[where].qualities[x]);
        let nE = document.createElement("h3");
        nE.appendChild(q);
        let p = document.getElementById("qualities");
        p.appendChild(nE);
        nE.classList.add("removable")
    }
    }
    //Counting
function ranking(){
    for(let x of people){
        let t = document.createTextNode(`${x.name}, ${x.age}`);
        let nE1 = document.createElement("div");
        let nE2 = document.createElement("img");
        let nE3 = document.createElement("h3");
        nE3.appendChild(t);
        nE1.appendChild(nE2);
        nE1.appendChild(nE3);
        let p = document.getElementById("ranking");
        p.appendChild(nE1);
        nE1.classList.add("ranked");
        nE2.classList.add("rank-img");
        nE3.classList.add("rank-name");
        nE2.src = x.photo
    }
}
function changePosition(opr){
    if(where + opr > peopleOrder.length - 1){
        return;
    }else if(where + opr < 0){
        return;
    }
    let next = where + opr;
    let ranked = document.getElementsByClassName("ranked");
    let temp = peopleOrder[where];
    peopleOrder[where] = peopleOrder[next];
    peopleOrder[next] = temp;
    peopleOrder[next].position = next + 1;
    peopleOrder[where].position = where + 1;
    where += opr;
    while(ranked.length > 0){
        ranked[0].remove();
    }
    for(let x of peopleOrder){
        let t = document.createTextNode(`${x.name}, ${x.age}`);
        let nE1 = document.createElement("div");
        let nE2 = document.createElement("img");
        let nE3 = document.createElement("h3");
        nE3.appendChild(t);
        nE1.appendChild(nE2);
        nE1.appendChild(nE3);
        let p = document.getElementById("ranking");
        p.appendChild(nE1);
        nE1.classList.add("ranked");
        nE2.classList.add("rank-img");
        nE3.classList.add("rank-name");
        nE2.src = x.photo
    }
    index.innerHTML = "Person n." + (peopleOrder[where].position);
}