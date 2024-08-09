//ex. 17

let guest_list : string[]= ['alia', 'sundus', 'zimal', 'ayesha'];
console.log('\n\Unfotunately we can not arrange big table. Only 2 person allow.');
while(guest_list.length>2){
let remove_guest = guest_list.pop();
console.log(`sorry madam. ${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected maam' + guest_list[i] + ', \nyes you are still invited for dinner  on tuesday.\nTHANKYOU\n');
}
guest_list.splice(0,2)
console.log(guest_list)