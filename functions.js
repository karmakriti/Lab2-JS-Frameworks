// First Function: Greeting
export function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName} to world of functions!`);
}

// Second Function: Convert Kilograms to Pounds
export function kgToPounds(kg) {
    return kg * 2.20462;
}

// Third Function: Calculate Square Root
export function triangleArea(base, height) {
    return (1 / 2) * base * height;
}



// Function to Generate Fibonacci Sequence
export function fibonacciSequence(n) {
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let c = a;
        a = b;
        b = c + b;
    }
    return sequence;
}
