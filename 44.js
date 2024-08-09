// 44. Sandwiches: Summarize sandwich orders with varying ingredients.
// solution:
function make_sandwich(...items) {
    console.log(`Making a sandwhich with : ${items.join(',')}`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", " lettuce", "tomato");
make_sandwich("avacado", "sprouts", "mustard", "mayo");
export {};
