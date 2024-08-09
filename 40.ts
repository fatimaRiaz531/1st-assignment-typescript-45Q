
//40. album

function make_Album (artistName: string, albumTitle: string){
    return{artistName, albumTitle}
}
let album1 = make_Album(" Ali", "Rang-e-mohabbat");
let album2 = make_Album(" Ahmed", "Roshan Adhera");
let album3 = make_Album(" Khizar", "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

//number of tracks
function make_Album2(artistName:string, albumTitle: string, numberOfTracks?: number){
    return{artistName, albumTitle, numberOfTracks}
}
let album4 = make_Album2("Ali","dil hai",30);
let album5 = make_Album2(" Ahmed", "ajeeb kahani",55);
let album6 = make_Album2(" Arjit singh", " humari adhuri kahani",2.0);
console.log(album4);
console.log(album5);
console.log(album6);