import express from 'express';
import { getJokes, 
    createNewJoke, 
    getJokewithId, 
    updateJokewithId, 
    deleteJokewithId } from '../controllers/jokes.js'

const router = express();

router
    .route('/')
    .get(getJokes)
    .post(createNewJoke);

router
    .route('/:_id')
    .get(getJokewithId)
    .put(updateJokewithId)
    .delete(deleteJokewithId);


export default router;