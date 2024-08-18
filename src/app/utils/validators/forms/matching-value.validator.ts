import { FormGroup, ValidatorFn } from '@angular/forms';

/**
 * If value of control x does not equal (===) value of control y,
 * { 'valueMismatch': true } is returned.
 *
 * Use this validator on the FormGroup level where both x and y controls
 * are contained.
 *
 * @param x string Key of the first control to match
 * @param y string Key of the second control to match
 */
export function matchingValueValidator(x: string, y: string): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } => {
    const xCtrl = group.get(x);
    const yCtrl = group.get(y);

    return xCtrl.value !== yCtrl.value ? { valueMismatch: true } : null;
  };
}
