import axios from 'axios';

export const getQuotes = async(req, res) => {
    try{
        axios.get("https://quotes15.p.rapidapi.com/quotes/random/", {
            headers: {
                'X-RapidAPI-Key': process.env['X-RapidAPI-KEY'],
                'X-RapidAPI-Host': process.env['X-RapidAPI-HOST'],
                }
        })
        .then(response => {
            const filteredResponse = {
                content: response.data.content,
                author: response.data.author,
            };
            res.json(filteredResponse.content);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'An error occurred' });
        });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'An error occurred in controllers' });
    }
}

