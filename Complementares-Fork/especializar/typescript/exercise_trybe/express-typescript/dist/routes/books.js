"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const functions_1 = require("../functions");
const StatusCode_1 = require("../enums/StatusCode");
const router = (0, express_1.Router)();
const NotFoundMessage = 'Livro não encontrado.';
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, functions_1.read)();
    return res.status(StatusCode_1.StatusCode.OK).json(books);
}));
router.get('/books/:isbn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isbn } = req.params;
    const books = yield (0, functions_1.read)();
    const book = books.find((book) => book.isbn === isbn);
    if (!book)
        return res.status(StatusCode_1.StatusCode.NOT_FOUND).send(StatusCode_1.Message.NOT_FOUND_MESSAGE);
    return res.status(200).json(book);
}));
router.post('/books', (req, res) => { });
router.put('/books/:isbn', (req, res) => { });
router.delete('/books/:isbn', (req, res) => { });
exports.default = router;
