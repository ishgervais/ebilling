import { createToken, getAllTokens, getTokenById, getByMeter } from "../controllers/tokens";
export default function routes(app) {
    app.get("/api/tokens", (req, res) => getAllTokens(req, res));
    app.get("/api/tokens/:id", (req, res) => getTokenById(req, res));
    app.post("/api/tokens", (req, res) => createToken(req, res));
    app.get("/api/check/:meterId", (req, res) => getByMeter(req, res));
}
