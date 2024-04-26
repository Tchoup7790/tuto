import express from 'express';

const PORT = 8089;

const app = express();

/**
 * Middleware that will check if the parameters in the header of the request
 * named 'isValid' exists and if its value is true or false.
 * 
 * Call next() to pass control to the next middleware function in the stack, if no remaining
 * middlewares in stack, pass to route.
 * 
 * If next() is called with an argument, it will be treated as an error and passed to the error-handling middleware. 
 * 
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function middleware(req, res, next) {
    if(!req.headers['isValid']) {
        // req.headers['isValid'] is undefined, null or false
        res.status(401).send({ error: 'Request is not valid' }); // HTTP Status Code 401 : Unauthorized
    } else {
        next(); // Call the next fonction to continue to the next middleware / route
    }
}

/**
 * Middlewares can :
 *  - be applyed to a specific route, i.e : app.use('/test', middleware);
 *  - be created with an arrow function, i.e : app.use((req, res, next) => { next(); })
 * 
 * Example of an error-handling middleware :
 * app.use((err, req, res, next) => {
 *  console.error(err);
 *  res.status(500).send({ error: 'Something went wrong' }); // HTTP Status Code 500 : Internal Server error
 * });
 * 
 * Example of next function that will call the next error-handling middleware in the stack : next(new Error('Nothing work !'));
 */
app.use(middleware);

/**
 * Route that will return the actual year
 */
app.get('/year', (req, res) => {
    res.status(200).send({
        data: (new Date(Date.now())).getFullYear(),
    }); // HTTP Status Code 200 : Ok
});

// Start the server at port 8089 (change if needed)
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});