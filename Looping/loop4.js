let total = 0;
let hasil = "";

for(let i = 1; i <= 5; i++) {

    total += i;

    if(i < 5) {
        hasil += i + " ";
    } else {
        hasil += i;
    }
}
console.log(hasil + " = " + total)