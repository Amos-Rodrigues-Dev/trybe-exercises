"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.StatusCode = void 0;
// ./enums/StatusCode.ts
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
exports.StatusCode = StatusCode;
var Message;
(function (Message) {
    Message["NOT_FOUND_MESSAGE"] = "Livro n\u00E3o encontrado.";
})(Message || (Message = {}));
exports.Message = Message;
