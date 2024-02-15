import { generateUtilityClass } from '../generateUtilityClass';
import { generateUtilityClasses } from '../generateUtilityClasses';

const COMPONENT_NAME = 'Checkbox';

export interface CheckboxClasses {
  /** Class name applied to the root element. */
  root: string;
  /** Class name applied to the root element if the component is a descendant of `FormControl`. */
  formControl: string;
  /** State class applied to the root element if the component is focused. */
  focused: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `error={true}`. */
  error: string;
  /** Class name applied to the input element. */
  input: string;
}

export type CheckboxClassKey = keyof CheckboxClasses;

export function getCheckboxUtilityClass(slot: string): string {
  return generateUtilityClass(COMPONENT_NAME, slot);
}

export const checkboxClasses: CheckboxClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'formControl',
  'focused',
  'disabled',
  'error',
  'input',
]);