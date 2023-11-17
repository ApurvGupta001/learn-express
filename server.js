const express = require("express");
const app = express();
const PORT = 3000
const friends = [
    {
        id: 0,
        name: 'Sir issac newton'
    },
    {
        id: 1,
        name: 'elon musk'
    }
]

app.use((req, res, next) => {                                         //middleware cz used use
    const start = Date.now();
    next();                                                           //return back after the next handler return       
    const end = Date.now();                   //since middleware need to use next to pass it to correct handler
    console.log(`${req.method} ${req.url} ${end - start}ms`)
})

app.get('/', (req, res) => {  // (path, (req, res))
    res.send("hehe home page")
})

app.get('/friends', (req, res) => {  // (path, (req, res))
    res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {  // (path, (req, res))
    const friendId = Number(req.params.friendId);
    // console.log(friendId);
    const friend = friends[friendId];
    if(friend) {
        res.json(friend);
    }
    else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
})

app.post('/messages', (req, res) => {  // (path, (req, res))
    console.log("postings")
})

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}...`)
})