import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        requires: true
    }  
}, {
    timestamps: true
});

const Joke = mongoose.model('Joke', jokeSchema);

export default Joke;