const prompt = require("prompt-sync")({signit: true});

// Volume prisma segitiga
console.log("=== volume prisma segitiga ===");
let l_alas = parseFloat(prompt("Masukkan luas alas segitiga: "));
let t_prisma = parseFloat(prompt("Masukkan tinggi prisma: "));
let v = 1/2  * l_alas * t_prisma;
console.log("volume adalah: " + v);

// Luas permukaan prisma segitiga
console.log("\n=== Luas permukaan prisma segitiga ===");
let l_alas2 = parseFloat(prompt("Masukkan luas alas segitiga: "));
let t_prisma2 = parseFloat(prompt("Masukkan tinggi prisma: "));
let k_prisma = parseFloat(prompt("Masukkan keliling prisma: "));
let lp = (2 * l_alas2) + (k_prisma * t_prisma);
console.log("Luas permukaan prisma segitiga adalah: " + lp);