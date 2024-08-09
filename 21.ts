//21. typescript object

interface item {
    name: string
    price: number
}
const book: item ={
    name : 'ESSENTIAL TYPESCRIPT'
    price: 500
}
const mango : item ={
    name: 'mango'
    price: 350
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`mango name: ${mango.name}, price: $${mango.price}`)
