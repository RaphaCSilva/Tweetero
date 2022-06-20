import express, {json} from "express";
import chalck from "chalk";
import cors from "cors";


const app = express();
app.use(json());
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("Ok");
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("Ok");
});



app.listen(5000, ()=> {

});