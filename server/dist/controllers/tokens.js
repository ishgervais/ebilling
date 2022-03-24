var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../client";
import { generateToken, getDays } from "../utils/index";
export function getAllTokens(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = yield prisma.token.findMany();
        return res.json(tokens);
    });
}
export function getTokenById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params;
        if (!id) {
            return res.status(401).json({
                message: "Id should be provided",
            });
        }
        const token = yield prisma.token.findFirst({ where: { id } });
        if (!token) {
            return res.status(404).json({
                message: "No token found with this id ",
            });
        }
    });
}
export function createToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { meter, amount } = req.body;
        amount = parseInt(amount);
        if (!meter || !amount) {
            return res.status(401).json({
                message: "All fields are required",
            });
        }
        if (meter.length != 6) {
            return res.status(401).json({
                message: "Invalid meter, only 6 digits accepted",
            });
        }
        if (amount.length > 6 ||
            !(parseInt(amount) < 182500) ||
            !(amount % 100 == 0)) {
            return res.status(401).json({
                message: "Invalid amount, only multiples of 100 not greater than 182,500 is accepted",
            });
        }
        const token = yield prisma.token.create({
            data: {
                meter,
                token: generateToken(),
                amount,
                status: true,
                expiresAt: getDays(amount),
            },
        });
        return res.status(201).json(token);
    });
}
export function getByMeter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { meterId } = req.params;
        if (!meterId) {
            return res.status(401).json({
                message: "Meter should be provided",
            });
        }
        const tokens = yield prisma.token.findMany({
            orderBy: [
                {
                    createdAt: "desc",
                },
            ],
        });
        if (!tokens) {
            return res.status(404).send("No token found with this meter ");
        }
        const meter = tokens.find((item) => item.meter === meterId);
        if (!meter) {
            return res.status(404).send("No token found with this meter ");
        }
        return res.status(200).send(meter);
    });
}
