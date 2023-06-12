import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';

export interface ToggleButtonClasses {
  /** Class name applied to the root element. */
  root: string;
  /** State class applied to the root `button` element if `active={true}`. */
  active: string;
  /** State class applied to the root `button` element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root `button` element if `focusVisible={true}`. */
  focusVisible: string;
}

export type ToggleButtonClassKey = keyof ToggleButtonClasses;

export function getToggleButtonUtilityClass(slot: string): string {
  return generateUtilityClass('MuiToggleButton', slot);
}

const toggleButtonClasses: ToggleButtonClasses = generateUtilityClasses('MuiToggleButton', [
  'root',
  'active',
  'disabled',
  'focusVisible',
]);

export default toggleButtonClasses;
