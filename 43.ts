
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
//solution


let magicians: string[] = ["John", "Edward", "Silas"];

function makeGreat(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  magicians.forEach(magician => {
    greatMagicians.push(`${magician} The Great`);
  });
  return greatMagicians;
}

let greatMagicians = makeGreat(magicians.slice()); // Create a copy of the magicians array to avoid modifying the original

console.log("Original magicians:");
console.log(magicians); // Show the original magicians names

console.log("Great Magicians:");
console.log(greatMagicians); // Show the great magicians names
