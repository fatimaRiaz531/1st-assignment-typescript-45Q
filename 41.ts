// 41. Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in
//  a centralized manner. This is useful for handling lists of data.

//example 1
let magician: string[]= ["John","Edward","Silas"];

function show_magician(magicians: string[]){
    magician.forEach(magician=>{
        console.log(magician);
    });
}
show_magicians(magician);
// example 2
let magician2: string[] =["Alia","Anthony","Qasim"];

function show_magicians(magicians: string[]){
    magician.forEach(magician=>{
        console.log(magician);
    });
}

show_magicians(magician2);
