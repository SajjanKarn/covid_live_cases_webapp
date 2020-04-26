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

        request(
          "https://api.thevirustracker.com/free-api?global=stats",
          (err, finalResult) => {
            const JSONDATA = finalResult.body;

            const ParsedData = JSON.parse(JSONDATA);

            const FinalDataGlobal = ParsedData.results;

            res.render("index", {
              FinalItem: FinalItem,
              totalCases: FinalDataGlobal[0].total_cases,
              totalDeaths: FinalDataGlobal[0].total_deaths,
              totalRecovered: FinalDataGlobal[0].total_recovered,
              totalNewCasesToday: FinalDataGlobal[0].total_new_cases_today,
              totalNewDeathsToday: FinalDataGlobal[0].total_new_deaths_today,
              totalActiveCases: FinalDataGlobal[0].total_active_cases,
              totalSeriousCases: FinalDataGlobal[0].total_serious_cases,
            });
          }
        );
      }
    }
  );
};

exports.controlVisualization = (req, res) => {
  res.render("visualization");
};

exports.controlCoronavirus_info = (req, res) => {
  request(
    "https://api.thevirustracker.com/free-api?global=stats",
    (err, respone) => {
      if (err) {
        console.log(err);
      } else {
        console.log(respone.body);

        const JSONDATA = respone.body;

        const ParsedData = JSON.parse(JSONDATA);

        const results = ParsedData.results;

        res.render("covidinfo", {
          totalCases: results[0].total_cases,
          totalDeaths: results[0].total_deaths,
          totalRecovered: results[0].total_recovered,
        });
      }
    }
  );
};
