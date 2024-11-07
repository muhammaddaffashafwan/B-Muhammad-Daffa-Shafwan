// // function myfirst() {
// //     myDisplayer("Good bye") ;
// // }

// // function mySecond(callback) {
// //     myDisplayer("Hello") ;
// //     callback();
// // }

// // function myDisplayer(message) {
// //     console.log
// // }

// // function setTime() {
// //     const header = document.getElementById("header");
// //     header.textContent = new Date().toString();
// //   }
// //   setInterval(setTime, 1000);
// //   console.log("Program Finish");

// function divideNumbers(num1, num2) {
//     try {
//         // Cek apakah input adalah angka
//         if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//             throw new Error("Input harus berupa angka.");
//         }
        
//         // Cek apakah pembagian dengan nol
//         if (num2 === 0) {
//             throw new Error("Tidak bisa membagi dengan nol.");
//         }
        
//         // Lakukan pembagian
//         const result = num1 / num2;
//         return result;
//     } catch (error) {
//         // Tangkap dan tampilkan pesan kesalahan
//         console.error(error.message);
//         return null; // Kembalikan null jika terjadi kesalahan
//     }
// }

// // Contoh penggunaan
// console.log(divideNumbers(10, 2)); // Output: 5
// console.log(divideNumbers(20, 10)); 
// console.log(divideNumbers(10, 'a')); // Output: Input harus berupa angka.
// console.log(divideNumbers(20, 0)); // Output: Tidak bisa membagi dengan nol.


  