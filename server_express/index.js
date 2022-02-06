const express = require("express");
const app = express();

const { cors } = require("./middleware");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(require("./routes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App Listning On Port: ${PORT}`);
});