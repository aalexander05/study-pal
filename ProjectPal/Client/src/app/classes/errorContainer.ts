import { HttpErrorResponse } from "@angular/common/http";

export class ErrorContainer {
    public errorMessage: string | undefined;
    public httpError: HttpErrorResponse | undefined;

    public clear(): void {
        this.errorMessage = undefined;
    }
}