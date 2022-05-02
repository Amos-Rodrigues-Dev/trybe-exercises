// ./enums/StatusCode.ts
enum StatusCode {
  OK = 200,
  CREATED,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

enum Message {
  NOT_FOUND_MESSAGE = 'Livro não encontrado.',
}

export { StatusCode, Message };
