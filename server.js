const app = require("./app");
const request = require("request");
// The API that we r gonna use in this project

// https://api.thevirustracker.com/free-api?countryTotals=ALL

// Some Basic Routes
app.get("/", (req, res) => {
  request(
    "https://api.thevirustracker.com/free-api?countryTotals=ALL",
    (err, response, body) => {
      if (err) {
        console.log(err);
      } else {
        // Here We'll parse the data

        const ParsedData = JSON.parse(response.body);

        const IterationArray = ParsedData.countryitems;

        const FinalItem = IterationArray[0];

        // for (i = 1; i <= 182; i++) {
        //   console.log(FinalItem[`${i}`].title);
        // }

        res.render("index", { FinalItem: FinalItem });
      }
    }
  );
});

// here we will handle the post routes
app.post("/showdata", (req, res) => {
  const value = req.body.country;
  console.log(value);
  res.redirect("/");
});

// Here's the app configurations...
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started Listening On Port 3000");
});
