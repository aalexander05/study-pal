import { AbstractControl } from "@angular/forms";

export function hasErrorAndTouched(control: AbstractControl) {
    return control.hasError("required") && control.touched;
}