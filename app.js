const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const newProductRoutes = require("./newProduct/newProduct.routes");
const orderRoutes = require("./orders/orders.routes");

const db = require("./DB/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// Hall
app.use("/newProduct", newProductRoutes);
app.use("/orders", orderRoutes);

// auth only
app.use("/auth", require("./auth/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
