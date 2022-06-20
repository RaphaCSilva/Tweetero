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
  tweets.unshift(tweet);
  res.send("Ok");
});

app.get("/tweets", (req, res) => {
  const lastTweets = [];
    if(tweets.length > 0){
      for(let i = 0; i < tweets.length && i < 10; i++){
        const avatar = users.find(element => element.username === tweets[i].username);
        const username = tweets[i].username;
        const tweet = tweets[i].tweet;
        const obj = {
          username,
          avatar: avatar.avatar,
          tweet
        };
        lastTweets.push(obj);
      };
  }
  res.send(lastTweets);
});

app.listen(5000, ()=> {
  console.log(chalck.green("online"));
});