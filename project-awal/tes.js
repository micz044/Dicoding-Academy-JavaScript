try {
  console.log("Awal blok try");   // (1)
  errorCode;                      // (2)
  console.log("Akhir blok try");  // (3)
} catch (error) {
  console.log("Terjadi error!");  // (4)
}
 