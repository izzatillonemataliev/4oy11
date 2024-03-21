// let students = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// let result = students.map({});

// So’zlar massivi berilgan. Unda faqat uzunligi 5 dan ortiq bo'lgan so’zlarni qoldiring. ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']

// let sozlar = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// let sozlar2 = sozlar.filter((soz) => soz.length > 5);
// console.log(sozlar2);

// -----------------UY ISHI-----------------

// 1. Raqamlar massivi berilgan. Uni shu raqamlarning kvadratlaridan
// iborat massiv qiling. (map)

// let raqam = [1,2,3,4,5]
// let yangiRaqam = raqam.map(son => son * son)
// console.log(yangiRaqam);

// 2. Raqamlar massivi berilgan. Unda faqat salbiy raqamlarni
// qoldiring. (filter)

// let son = [1, -2, -3, -4, 5];
// let yangiSon = son.filter((raqam) => raqam < 0);
// console.log(yangiSon);

// 7. Raqamlar massivi berilgan. Unda ikkita bir xil raqam mavjudligini
// tekshiring. Ha bo'lsa, "ha" ni, bo'lmasa, "yo'q" ni chop eting.

// const berilganMassiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let mavjud = false;

// for (let i = 0; i < berilganMassiv.length - 1; i++) {
//     for (let j = i + 1; j < berilganMassiv.length; j++) {
//         if (berilganMassiv[i] === berilganMassiv[j]) {
//             mavjud = true;
//             break;
//         }
//     }
//     if (mavjud) {
//         break;
//     }
// }

// if (mavjud) {
//     console.log("ha");
// } else {
//     console.log("yo'q");
// }

// 8. Massivni berilgan qiymatlar bilan to'ldiradigan arrayFill
// funksiyasini yarating. Funktsiya qabul qiladigan birinchi parametr
// massivni to'ldirish qiymati, ikkinchi parametr esa massivda qancha
// element bo'lishi kerakligidir. Misol: arrayFill('x', 5) massivni ['x', 'x',
// 'x', 'x', 'x'] hosil qiladi.

// function result(qiymat, uzunlik) {
//     const massiv = [];
//     for (let i = 0; i < uzunlik; i++) {
//         massiv.push(qiymat);
//     }
//     return massiv;
// }
// const natija = result('x', 5);
// console.log(natija);

// 9. Massivni shunday to'ldiring: birinchi elementga 'x', ikkinchisiga
// 'xx', uchinchi elementga 'xxx' va hokazo.

// let massiv = Array.from({ length: 5 }, (_, index) => "x".repeat(index + 1));
// console.log(massiv);

// 10. Massivni shunday toʼldiring: birinchi elementga “1”, ikkinchisiga
// "22", uchinchisiga "333" va hokazo.

// const massiv1 = Array.from({ length: 5 }, (_, index) =>
//   String(index + 1).repeat(index + 1)
// );
// console.log(massiv1);
