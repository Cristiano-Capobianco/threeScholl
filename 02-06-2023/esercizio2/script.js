var word1 = prompt("Inserire la prima parola");
var word2 = prompt("Inserire la seconda parola");

var wordLenght1 = word1.length;
var wordLenght2 = word2.length;

if (wordLenght1 < wordLenght2) {
  console.log(
    word1 + " è la parola più corta, mentre " + word2 + " è la parola più lunga"
  );
} else if (wordLenght2 < wordLenght1) {
  console.log(
    word2 + " è la parola più corta, mentre " + word1 + " è la parola più lunga"
  );
} else {
  console.log("la lunghezza delle due parole è uguale");
}
