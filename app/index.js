require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const router = require("./router")
const swaggerDocument = require("../docs/swagger.json");
const { MORGAN_FORMAT } = require("../config/application")
const app = express();
const PORT = process.env.PORT || 8000;

console.clear();

app.use(morgan(MORGAN_FORMAT));
app.use(cors());
app.use(express.json());
app.get("/documentation.json", (req, res) => res.send(swaggerDocument));
app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
})

app.get("/", (req, res) => res.send("Jalan Bos"));

module.exports = router.apply(app);
