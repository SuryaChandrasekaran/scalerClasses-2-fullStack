function* fn(){
    console.log("Before first yield");
    console.log("Before first yield");
    console.log("Before first yield");
    yield 10;

    console.log("before second yield");

    yield 20;
    console.log("after second yield");
}

let genrator = fn();
console.log("Before-------------------------------------");
console.log("res of first yield", genrator.next().value);

console.log("Between-------------------------------------");
console.log("res of first yield", genrator.next().value);

console.log("After-------------------------------------");
console.log("res of first yield", genrator.next().value);