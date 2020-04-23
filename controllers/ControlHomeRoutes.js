const request = require("request");

exports.controlHome = (req, res) => {
  request(
    "https://api.thevirustracker.com/free-api?countryTotals=ALL",
    (err, response) => {
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
};

exports.controlVisualization = (req, res) => {
  res.render("visualization");
};
