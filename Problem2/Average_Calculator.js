const express = require("express");
const app = express();
const PORT = process.env.PORT||9876;


function generatePrimes(n) {
    const primes = [];
    for (let num = 2; primes.length < n; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

//Endpoint for get prime numbers
app.get('/primes', (req, res) => {
    const n = 15; 
    const primes = generatePrimes(n);
    res.json({ numbers: primes });
}); 




function generateFibonacci(n) {
    const fibonacci = [1, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

// Endpoint for get Fibonacci numbers
app.get('/fibo', (req, res) => {
    const n = 15; 
    const fibonacci = generateFibonacci(n);
    res.json({ numbers: fibonacci });
});


function generateEvenNumbers(n) {
    const EvenNumbers = [];
    for (let num = 0; EvenNumbers.length < n; num += 2) {
        EvenNumbers.push(num);
    }
    return EvenNumbers;
}

// Endpoint to get Even numbers
app.get('/even', (req, res) => {
    const n = 15; 
    const EvenNumbers = generateEvenNumbers(n);
    res.json({ numbers: EvenNumbers });
});

function generateRandom(n) {
    const Random =[];
    for(let i=0;i<n;i++)
    {
        Random.push(Math.floor(Math.random() * n));
    }
    return Random;
}

// Endpoint for get Random numbers
app.get('/rand', (req, res) => {
    const n = 15; 
    const Random = generateRandom(n);
    res.json({ numbers: Random });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});