var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import app from "./app";
export const createTestServer = () => {
    const prisma = new PrismaClient();
    const internalConfig = {
        server: undefined,
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const instance = app().listen({ port: 8003 });
        internalConfig.server = instance;
        yield prisma.$connect();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        internalConfig.server.close();
        yield prisma.$disconnect();
    }));
    return {
        prisma,
        serverURL: `http://localhost:8003`,
    };
};
