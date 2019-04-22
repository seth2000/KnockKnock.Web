Recently got LinkedIn contact Rachael Goodenough at Readify, she is a nice lady, we had a warm short chat on the phone. 
As a part of the hiring procedure, the candidate was required to finish a code test. 

I am very busy these days, so it delayed several weeks. Mmm, Prevent "I am busy" excuse, I do it today. 
Hope it could help someone to join readify as well. 

It is primary version, but it is always exciting to build something from scratch, I do everything from 10:00 am to 3:00pm, not too bad.
You can do much fast indeed.

Have a lot of fun of learning and coding.

## Check and Install the package as below -- I Used 

1. Check node.js version and installation
   node --version

2. Install Express
   npm install -g express

3. Install Swagger
   npm install -g swagger-ui-express

4. Install Nodemon
   npm install -g nodemon


## Test by Curl at Windows Environment

1. curl -X GET -H "Content-type:application/json" http://127.0.0.1:3000/api/Fibonacci?n=5
2. curl -X GET -H "Content-type:application/json" http://127.0.0.1:3000/api/ReverseWords?sentence=This%20is%20a%20sentence!%20121%20%2411
3. curl -X GET -H "Content-type:application/json" http://127.0.0.1:3000/api/Token
4. curl -X GET -H "Content-type:application/json" "http://127.0.0.1:3000/api/TriangleType?a=3&b=4&c=5"  
        // the quote with URL is needed in Windows cmd, or the last Query string will NOT be considered as part of URL 

## Triangle Types:
I copied the main idea from https://www.bbc.com/bitesize/articles/ztf9h39 and converted it to math lauguage.

Order form minto max, a, b, c

Error: ( a + b < c)

Equilateral  (a==b==c)
An equilateral triangle has three equal sides and angles. It will always have angles of 60° in each corner.

Isosceles   (a==b or b==c )
An isosceles triangle can be drawn in many different ways. It can be drawn to have two equal sides and two equal angles or with two acute angles and one obtuse angle. It is easy to work out the missing angles of an isosceles triangle by looking for the angles that should be equal.

Right-angled triangle ( a*a + b*b = c*c)
A right-angled triangle has one 90° angle. That 90° angle is shown as a small square where two sides of the triangle join. It is possible for a triangle to be a right-angled triangle and an isosceles triangle at the same time. In this case the angles would be 90°, 45° and 45°.

Scalene  ( a < b < c)
A scalene triangle has three different angles and none of its sides are equal in length. 

Obtuse   (c*c > a*a + b*b)
An obtuse triangle has three different angles, with one angle greater than 90°. 
