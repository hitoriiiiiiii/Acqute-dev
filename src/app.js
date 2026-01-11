import express from 'express';

const app = express();

app.get('/', (res,req) => {
    res.status(200).send('Hello from acquistions !')
})

export default app;