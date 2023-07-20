import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { ErrorContainer } from "./errorContainer";

export function handleError(error: HttpErrorResponse, errorContainer: ErrorContainer) {
    console.error(error);
    errorContainer.httpError = error;
    if (error.status === HttpStatusCode.BadRequest) {
        if (typeof error.error === 'string') {
            errorContainer.errorMessage = error.error;
        } else {
            errorContainer.errorMessage = 'There was a problem submitting your request. Check your entries and try again.'
        }
    } else if (error.status === HttpStatusCode.Unauthorized) {
        errorContainer.errorMessage = "You are unauthorized. Try logging in."
    } else if (error.status === HttpStatusCode.InternalServerError) {
        errorContainer.errorMessage = "There was an error. The system must be having a bad day. Try again later."
    }
}
