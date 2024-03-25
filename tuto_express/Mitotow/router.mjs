import express from 'express';

const router = express.Router();

router
    .get('/api/v1/ping', (req, res, next) => {
        // middleware
        if(!req.headers['x-api-key']) {
            res.sendStatus(401); // 401 : Unauthorized
        } else {
            next();
        }
    }, (req, res) => {
        // traitement
        res.send('pong')
    });

export default router;