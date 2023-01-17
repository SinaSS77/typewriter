// How to set a setTimeout to iterate throughout a loop
// it will print a sentence like typewriter


const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      console.log("\n");
    }, i * 70 + 70);
  }
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 70);
 
}

