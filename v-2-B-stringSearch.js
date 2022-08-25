// egp :: 1 by string  searching Using ((indexOF()))
// egp :: 1 by string  searching Using ((indexOF()))
// egp :: 1 by string  searching Using ((indexOF()))
const shopping = [
    "nokia mobile 16 gb internal storage with 8gb ram",
    "itel mobile 16 gb internal storage with 8gb ram",
    "16 gb internal storage with 8gb ram samsung mobile",
    "internal storage with 8gb ram jioni mobile 16 gb",
    "ios mobile 20 gb internal storage with 10gb ram",
]
const searching = "jioni";
const setUpForSale = [];

// used loop for searching demanding products  
for(const line of shopping){
    if(line.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        setUpForSale.push(line);
    }
}
// console.log(setUpForSale);



// egp :: 2 by string  searching Using ((includes))
// egp :: 2 by string  searching Using ((includes))
// egp :: 2 by string  searching Using ((includes))

const students = [
    "rohim",
    "keltu",
    "herkin",
    "boldar",
    "poltu",
]
const seeking = "poltu";
const seatForSleep = [];
for(const name of students){
    // if(name.toLowerCase().includes(seeking.toLowerCase())){
    if(name.toUpperCase().includes(seeking.toUpperCase())){
        seatForSleep.push(name);
    }
}
// console.log(seatForSleep);





// egp :: 3 by string  searching Using ((startWith()))
// egp :: 3 by string  searching Using ((startWith()))
// egp :: 3 by string  searching Using ((startWith()))


const computer = [
    "dell sei is one of the most demanded product",
    "dablu sei is one of the most demanded product",
    "paglu sei is one of the most demanded product",
    "mongliya sei is one of the most demanded product",
    "dell sei is one of the most demanded product",
    "dell sei is one of the most demanded product",
]
const wanted = "d";
const seat = [];
for(const kit of computer){
    // if(name.toLowerCase().includes(seeking.toLowerCase())){
    if(kit.toUpperCase().startsWith(wanted.toUpperCase())){
        seat.push(kit);
    }
}
// console.log(seat);





// egp :: 4 by string  searching Using ((endWith()))
// egp :: 4 by string  searching Using ((endWith()))
// egp :: 4 by string  searching Using ((endWith()))
// egp :: 4 by string  searching Using ((endWith()))

const electricRation = [
    "dell 2 piece battery 1440mah",
    "dell 2 piece battery 1440mah",
    "dell 2 piece battery with my hard angry",
    "dell 2 piece battery with my respect",
    "dell 2 piece battery with my greetings"
]
const demand = "h";
const placeToKeep = [];
for(const parts of electricRation){
    // if(name.toLowerCase().includes(seeking.toLowerCase())){
    if(parts.toUpperCase().endsWith(demand.toUpperCase())){
        placeToKeep.push(parts);
    }
}
console.log(placeToKeep)