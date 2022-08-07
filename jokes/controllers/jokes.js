import Joke from '../models/joke.js';

//@desc         Get all jokes
//@route        GET /api/jokes
//@access       public
export const getJokes = async(req, res, next) => {
    try {
        const jokes = await Joke.find();
        res.status(201).json({success: true, jokes: jokes});
    } catch (error) {
        res.status(400)
            .json({success: false, error: error});
    }
    
}

//@desc         Create new jokes
//@route        POST /api/jokes
//@access       private
export const createNewJoke = async(req, res, next) => {
    try {
        const joke = await Joke.create(req.body);
        console.log(joke);
        res.status(201).json({
            success: true,
            data: joke
        });
    } catch (error) {
        res.status(400)
            .json({success: false, error: error});
    }   
}

//@desc         Create joke with id
//@route        GET /api/jokes/:_id
//@access       public
export const getJokewithId = async (req, res, next) => {
    try {
        const joke = await Joke.findById(req.params._id);
        res.status(201).json({success: true, joke: joke})
    } catch (error) {
        res.status(400)
            .json({success: false, error: error});
    }
}

//@desc         Update joke with id
//@route        PUT /api/jokes/:_id
//@access       public
export const updateJokewithId = async (req, res, next) => {
    try {
        const joke = await Joke.findByIdAndUpdate( req.params._id, req.body,
            {new: true, runValidators: true });
        
        if(!joke){
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: joke });
    } catch (err) {
        res.status(400)
            .json({success: false, error: error});
    }
}

//@desc         Delete joke with id
//@route        DELETE /api/jokes/:_id
//@access       public
export const deleteJokewithId = async (req, res, next) => {
    try {
        const joke = await Joke.findByIdAndDelete(req.params._id)

        if(!joke){
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} });

    } catch (err) {
        res.status(400)
            .json({success: false, error: error});
    }
   
}