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


// !! solution to #1:

// doubling back to epxress lecture notes and deciding to go with this:
app.get('/greetings', (req,res) => {
    res.send(`<h1>Welcome! Try typing your name after 'greetings' in the URL!</h1>`)
})

app.get('/greetings/:user', (req,res) => {
    res.send(`<h1>Hello there, ${req.params.user}!</h1>`)
});


//!! beginning of #2 :
// 2. Rolling the Dice - this is going to fun and challenging to figure out.
// app.get('/roll/:int', (req, res) => {
//     if (req.params.int =! 'number') {
//         res.send(`<h1>You must specify a number, as per requested by Lord Vader.`)
//     } else {
//         roll = Math.floor(req.params.int)
//         res.send(`<h1>You rolled a ${roll}!<h1>`)
//     }
// });


// !! isNaN was chosen as the means of 'check' after trouble shooting with ChatGPT and learning 'express' treats any dynamic part of the url as text and not a number, regardless on input type.
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


//!! working out what 'Number()' does
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


// let stringInt = "9"

// let int = Number(stringInt)

// console.log(int)

// let stringActual = "value"

// let string = Number(stringActual)

// console.log(string)


//!! attemtping to utilize isInteger (ultimately did not work)
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

// !! solution to #2:

// !! utitlized both 'Number' function to first change the string into an int or NaN, then added additonal functionality. This was a ton of fun to figure out. Thank you.
app.get('/roll/:int', (req, res) => {
    userInput = Number(req.params.int)
    if(Number.isInteger(userInput)){
        castDye = Math.floor(Math.random() * userInput +1)
        res.send(`<h1>You rolled a ${castDye}</h1>`)
    } else {
        res.send('<h1>You must specify a number, as per requested by Lord Vader.</h1>')
    }
})




// !!  3. I want THAT One! 

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  // !! 1st iteration, consloe logging to see if forEach works as intended - ChatGPT was utlizied to recall how to console log in nodemon - previous expereince was limited to clickable link created by 'send' response
// app.get('/collectibles/:itemIndex', (req, res) => {
//     userInput = Number(req.params.itemIndex)
//     numberOfItems = 0
//     collectibles.forEach((object) => {
//         numberOfItems += 1
//     })
//     res.send(console.log(numberOfItems))
// })

// !! just remembered that '.length' could potentially accomplish what the forEach is doing
// app.get('/collectibles/:itemIndex', (req, res) => {
//     userInput = Number(req.params.itemIndex)
//     numberOfItems = 0
//     collectibles.forEach((object) => {
//         numberOfItems += 1
//     })
    
//     if(userInput > numberOfItems){

//     }
// })

// !! // !! solution to #3:

// !! item number is captured userInput where the string is turned to an int/numerical value - input is checked against the 'length' of our collectibles list - 
// !! if the number exceeds the number of items in the list - specfied prompt is given - otherwise, selected item price and name is displayed with desired response.  

app.get('/collectibles/:itemIndex', (req, res) => {
    userInput = Number(req.params.itemIndex)
    if(userInput > collectibles.length) {
        res.send('<h1>This item is not yet in stock. Check back soon!</h1>')
    } else {
        res.send(`<h1>So, you want the ${collectibles[userInput].name}? For ${collectibles[userInput].price}, it can be yours!</h1>`)
    }
})

// !! Using Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// !! initially thought 'req.query' was perhaps an object that had a number of pre-existing quert parameters attached to it and tried to figure out what those are.
// !! later realized that express dynamically captures them and they can then be defined on the backend.
// resource : https://www.geeksforgeeks.org/express-js-req-query-property/
// app.get('/shoes', (req, res) => {
//     let queryObeject = req.query
//     console.dir(queryObeject)
//     res.send('test');
// });

app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

// app.get('/shoes', (req, res) => {
//     minPrice = req.query.minPrice
//     maxPrice = req.query.minPrice
//     type = req.query.type
//     if(minPrice){
//         userInputVal = Number(minPrice)
//         listOfShoes = []
//         shoes.forEach(item => {
//             if(item.price < userInputVal)
//                 listOfShoes.push(item.name)
//             res.send(listOfShoes)
//         });
//     }
// });

// !! startig over the with understanding that url an automtically understand what is being
//!! set as query parameters

app.get('/shoes', (req, res) => {
  res.send(`I now have your preference: ${req.query.min-price} and your value ${req.query.number}`)
})

//port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  