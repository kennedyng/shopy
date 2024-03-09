export class CustomError  extends Error {
    status: number;
    constructor(message = "Failed Something went wrong", status: number){
        super(message)
        this.name = "Custome Error"
        this.message =  message
        this.status = status
    }
}