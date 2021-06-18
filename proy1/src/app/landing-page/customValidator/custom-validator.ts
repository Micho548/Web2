import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {

  static passwordMatch(control: AbstractControl): void {
    const pass: string = control.get('password')?.value;
    const confPass: string = control.get('confirmPass')?.value;

    if (pass !== confPass) {
      control.get('confirmPass')?.setErrors({NoPassMatch: true})
    }
  }
}
