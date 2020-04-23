const app = require("./app");
const homeRoutes = require("./routes/Routes");

//API: https://api.thevirustracker.com/free-api?countryTotals=ALL

app.use(homeRoutes);

// Here's the app configurations...
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started Listening On Port 3000");
});
