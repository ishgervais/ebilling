import express from "express";
import routes from "../routes";
import cors from "cors";
export default function app() {
    const app = express();
    app.use(express.json());
    app.use(cors());
    routes(app);
    return app;
}
