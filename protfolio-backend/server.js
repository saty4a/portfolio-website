import express  from "express";
import route from "./routes.js";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());
app.options("*",cors())


app.use("/",route);

app.use((error, request, response, next) => {
    if (error) {
        response.status(500).json({
            message: "page not found",
        })
    }
})

app.listen(4000, () => {
    console.log("server running");
})