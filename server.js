const app = require("./index");
const mongoose = require("mongoose");

const uri = process.env.CON_STR;
mongoose
  .connect(uri)
  .then(console.log("DB connected successfully"))
  .catch((err) => console.log("some error has occured: ", err));

const port = process.env.PORT || 9000;
app.get("/", (req, res) => res.send("MOVIE-PRIME-MongDB SERVER is running"));
app.listen(port, () => console.log("Listening on port: ", port));
