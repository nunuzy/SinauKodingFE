for (let i = 1; i <= 10; i++) {
  if (i <= 6) {
    console.log("Angkot No. " + i + " beroperasi dengan baik.");
  } else if (i == 8) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else if (i >= 7) {
    console.log("Angkot No. " + i + " sedang tidak beroperasi.");
  } else {
    console.log("Angkot tidak ada");
  }
}
