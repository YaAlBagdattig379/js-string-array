// example: 1. "How to find out any specific products's "array"  using "indexOf"" 
const products = [
    'oppo mobile 12 GB RAM 120 storage',
    'hp Laptop 12 GB RAM 120 storage',
    'oppo laptop 12 GB RAM 120 storage',
    'oppo CellPhone 12 GB RAM 120 storage',
    'oppo  blue mobile 12 GB RAM 120 storage'
]
const searching = 'laptop'
const outPut = [];

// for(const product of products){
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//          outPut.push(product);
//     }
// }
console.log(outPut);







// example: 2."How to find out any specific products of an array using "includes"" 
// all most 'includes and indexOf same'

const kits = [
    'water mallon with random shape its size in my pocket ',
    'coconut joice with random shape its size in my bag ',
    'water mallon with random shape its size in my bag '  
]
const search = 'pocket';
const outPut2 = [];
// for(const product of kits){
//     if(product.toLowerCase().includes(search.toLowerCase())){
//         outPut2.push(product);
//     }
// }
console.log(outPut2);





// example: 3."How to find out the products same spelling in fornt word using "startswith"

const color =[
    ' is a sign of danger in dangeraous red sign',
    'Red is a tremandous sign of danger ',
    'is a not a normally symbol red  ',
    'red is a sign of danger in dangeraous sign'
]
const beautufulColor = 'red';
const outPut3 = [];
// for(const product of color){
//     if(product.toLowerCase().startsWith(beautufulColor.toLowerCase())){
//         outPut3.push(product)
//     }
// }
console.log(outPut3)





// example: 4."How to find out the products same spelling in last word using "endswith"

const shopping = [
    'tomato green  to make foods',
    'coconut oil for making foods',
    'to make the frying foods masterd oil is compulsury '
]
const sear = 'foods';
const outPut4 = [];
for(const product of shopping){
    if(product.endsWith(sear)){
        outPut4.push(product);
    }
}
console.log(outPut4);