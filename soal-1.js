function changeWord(selectedText, changedText, text) {
  // Validasi apakah selectedText terdapat pada kalimat
  // menggunakan metode replace() untuk mengganti kata yang diinginkan
  if (text.includes(selectedText)) {
    return text.replace(selectedText, changedText);
  } else {
    return "Kata tidak sesuai dengan kalimat yang ada";
  }
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
