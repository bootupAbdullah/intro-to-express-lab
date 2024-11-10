//import express
const express = require('express');
const app = express();
const PORT = 3000;




//root path '/'
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Express App!</h1?")
});

// 1. Be Polite, Greet the User


// answer found by trouble shooting here https://expressjs.com/en/guide/routing.html
// trying this: 

// app.get('/random.text', (req, res) => {
//     res.send('random.text')
//   })

// doubling back to epxress lecture notes and deciding to go with this:
app.get('/greetings', (req,res) => {
    res.send(`<h1>Welcome! Try typing your name after 'greetings' in the URL!</h1>`)
})

app.get('/greetings/:user', (req,res) => {
    res.send(`<h1>Hello there, ${req.params.user}!</h1>`)
});

// 2. Rolling the Dice - this is going to fun and challenging to figure out.
// app.get('/roll/:int', (req, res) => {
//     if (req.params.int =! 'number') {
//         res.send(`<h1>You must specify a number, as per requested by Lord Vader.`)
//     } else {
//         roll = Math.floor(req.params.int)
//         res.send(`<h1>You rolled a ${roll}!<h1>`)
//     }
// });


// isNaN was chosen as the means of 'check' after trouble shooting with ChatGPT and learning 'express' treats any dynamic part of the url as text and not a number, regardless on input type.
// app.get('/roll/:int', (req, res) => {
//     if(isNaN(req.params.int)) {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
//     } else {
//         roll = Math.floor(req.params.int)
//         res.send(`<h1>You rolled a ${roll}!<h1>`)
//     }
// });


// app.get('/roll/:int', (req, res) => {
//     if(isNaN(req.params.int)) {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
//     } else {
//         const castDye = (userInput) => {
//             roll = Math.floor(Math.random() * userInput + 1)
//             return res.send(`<h1>You rolled a ${roll}</h1> `)
//         }; 
//     }
// });


// app.get('/roll:int', (req, res) => {
//     if(Number(req.params.int) === NaN) {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
//     }
    
//     numVal = Number(req.params.int)

// })

// console.log(Number("9"))
// console.log(Number("string"))

// if(Number("9") === 9) {
//     console.log(true)
// }

// string = "string"
// int = Number("9")



// if(Number(string) === NaN ) {
//     console.log(true)
// }

// console.log(Number.isInteger(string === false))



// solution found: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// if (Number.isInteger(string) === false) {
//     console.log('this conditional works')
// }


// app.get('/roll/:int', (req, res) => {
//     if(Number.isInteger(req.params.int) === false ) {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
//     } else {
//         numVal = Number(req.params.int)
//         castDye = Math.floor(Math.random() * numVal + 1)
//         res.send(`<h1>You rolled a ${castDye}</h1>`)
//     }  
// });

// !!  The 'request' remains a string, Number.isInteger cannot distinguish between string and int, even with ===
// app.get('/roll/:int', (req, res) => {
//     if(Number.isInteger(req.params.int) === true ) {
//         numVal = Number(req.params.int)
//         castDye = Math.floor(Math.random() * numVal + 1)
//         res.send(`<h1>You rolled a ${castDye}</h1>`)
//     } else {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')   
//     }  
// });

// time crunch, couldn't find the error here, so decide to re-write it below.
// app.get('/roll/:int', (req, res) => {
//     userInput = Number(req.params.int)
//     if(Number.isInteger(userInput)) {
//         castDye = Math.floor(Math.random() * userInput + 1)
//         res.send(`<h1>You rolled a ${castDye}</h1>`)
//     } else {
//         res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')   
//     }
// }


// !! utitlized both 'Number' function to first change the string into an int or NaN, then added additonal functionality.
app.get('/roll/:int', (req, res) => {
    userInput = Number(req.params.int)
    if(Number.isInteger(userInput)){
        castDye = Math.floor(Math.random() * userInput +1)
        res.send(`<h1>You rolled a ${castDye}</h1>`)
    } else {
        res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
    }
})








// 3. I want THAT One! 

// const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];






//port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  