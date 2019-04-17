import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errors_message = [
    { type: 404, message: " not found.", status: "[NOT FOUND]"},
    { type: 401, message: " has not got the permission to access.", status: "[UNAUTHORIZED]"},
    { type: 409, message: " has already exist.", status: "[CONFLICT]"}
  ]

  constructor() { }

  generateErrorMessage(functionName: string, errorNumber: number): string{

    console.log("ERROR HANDLER: "  + functionName + " NUMBER " + errorNumber)
    let error = this.errors_message.find(err => err.type == errorNumber);
    let errorMesssage;

    if (error == undefined){
      errorMesssage = "[NOT FOUND]" + functionName + " not found.";
    } else {
      errorMesssage = error.status + functionName + error.message;
    }

    return errorMesssage;
  }
}
