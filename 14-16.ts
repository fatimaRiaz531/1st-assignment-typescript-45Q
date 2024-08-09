
//14 , 15, 16. guest list

let guest_list : string[]= ['alia', 'sundus', 'zimal', 'ayesha'];
 for (let i = 0; i < guest_list.length; i++) {
    console.log("Respected maam" + guest_list[i] + ', \nwe invited you to dinner on tuesday. \n\nTHANKYOU\n');
}
export{guest_list}

 let not_present  : string = 'alia';
let new_guest = ' nida yasir';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
   console.log('Respected maam'    + guest_list[i] + ', \nwe invited you to dinner on tuesday. \n\nTHANKYOU\n');
}
console.log("Miss ".concat(not_present, " will not coming on tuesday dinner party."));

guest_list.unshift(' sehar','aleena','mehwish hayat');
for (let i = 0; i < guest_list.length; i++) {
   console.log('Respected maam '     + guest_list[i] + ', \nwe invited you to dinner on tuesday. we found big table for dinner so we decided to invited 3 more guest. \n\nTHANKYOU\n');
}
