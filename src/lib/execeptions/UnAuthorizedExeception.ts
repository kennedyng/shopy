export class UnAuthorizedExeception extends Error {
  status: number;
  constructor(message = "Auth Failed", status: number = 403) {
    super(message);
    this.name = "Auth failed";
    this.message = message;
    this.status = status;
  }
}
