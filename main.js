import expres from "express";
import path from "path";
import route from "./routes/route.js";
import connectDB from "./connectDB/connectDB.js";
import bodyParser from "body-parser";

const app = expres();
const PORT = 4000;
// DB connection
connectDB();

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// setup for public file
app.use(expres.static(path.join(process.cwd(), "public")));

//setup for ejs template file
app.set("view engine", "ejs");
app.set("views", "./views");

//route
app.use("/", route);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
