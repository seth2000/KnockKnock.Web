const { TriangleType } = require("./TriangleType");
const { ReverseWords } = require("./ReverseWords");
const { Fibonacci } = require("./Fibonacci");

var express = require('express');
var app = express();

app.use(express.json());  // Accept: application/json

var router = express.Router();
app.get('/', function (req, res) {
  res.send('This is the readify KnockKnok test. https://knockknock.readify.net/swagger/ui/index');
});

app.get('/api/Fibonacci', (req, res) => {
 //  console.log(isInt(req.query.n));
  if ( isInt(req.query.n) ) {
    var result = "" + Fibonacci(req.query.n); // Force the result as the sring
    res.status(200).send(result);
  } else {
    res.status(400).json({
        "message": "The request is invalid."
    });
  }
});

app.get('/api/ReverseWords', (req, res) => {
   if (!isBlank(req.query.sentence)) {
    var result = "" + ReverseWords(req.query.sentence); // Force the result as the string
    res.status(200).send(result);
   } else {
    res.status(400).json({
        "message": "The request is invalid."
    });
   }
  });

app.get('/api/Token', (req, res) => {
    res.send('12ead100-b275-4bf6-b09b-b8615822fb6a'); // Please replace your own UUID
  });

app.get('/api/TriangleType', (req, res) => {
    var a = req.query.a;
    var b = req.query.b;
    var c = req.query.c;
    if ( isInt(a) && a > 0 &&  isInt(b) && b > 0 && isInt(c) && c > 0 ) {
        // order a, b, c from min to Max
        var sides = [];
        sides[0] = a;
        sides[1] = b;
        sides[2] = c;
        
        var result = "" + TriangleType( sides.sort() ); // Force the result as the string
        res.status(200).send(result);
    } else {
        res.status(400).json({
            "message": "The request is invalid."
        });  
    }
  });


  function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }

  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }
app.listen(3000, function () {
  console.log('KnockKnock app listening on port 3000!');
})

