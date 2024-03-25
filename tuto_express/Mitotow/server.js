import express from 'express';
import router from './router.mjs';

const app = express();

/**
 * Middleware
 * 
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function middleware(req, res, next) {
    if(!req.headers['x-api-key']) {
        res.sendStatus(401); // 401 : Unauthorized
    } else {
        next();
    }
}

app.use(middleware);
app.use(router);

app.get('/year', (req, res) => {
    res.status(200).send({
        data: (new Date(Date.now())).getFullYear(),
    });
});

app.listen(8089, () => {
    console.log('Server on');
});