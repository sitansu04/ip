const express = require("express");
const unirest = require("unirest");
const cors = require("cors");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    const apiCall = unirest(
              "GET",
              "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
            );
            apiCall.headers({
              "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
              "x-rapidapi-key": "a8e7d82e4dmsh53e8c803f3e5ebep122fb5jsnc150bf37d498",
            });
            apiCall.end(function (result) {
              if (res.error) throw new Error(result.error);
              console.log(result.body);
              res.json(result.body.ip);
            });
});

app.listen(8080, () => {
  console.log(`connected`);
});
