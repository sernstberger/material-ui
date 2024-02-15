import * as React from 'react';
import { Simplify } from '@mui/types';
import { FormControlState } from '../FormControl';
import { UseCheckboxParameters, UseCheckboxRootSlotProps } from '../useCheckbox';
import { PolymorphicProps, SlotComponentProps } from '../utils';

export interface CheckboxRootSlotPropsOverrides {}
export interface CheckboxInputSlotPropsOverrides {}

export interface SingleLineCheckboxProps {

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type?: React.HTMLInputTypeAttribute;
}



export type CheckboxOwnProps = (SingleLineCheckboxProps) &
  Omit<UseCheckboxParameters, 'error'> & {
    'aria-describedby'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string;
    /**
     * If `true`, the `input` element is focused during the first mount.
     */
    autoFocus?: boolean;
    /**
     * Class name applied to the root element.
     */
    className?: string;
    /**
     * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `baseui--error` class on the root element.
     * The prop defaults to the value (`false`) inherited from the parent FormControl component.
     */
    error?: boolean;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly?: boolean;
    /**
     * The props used for each slot inside the Input.
     * @default {}
     */
    slotProps?: {
      root?: SlotComponentProps<'div', CheckboxRootSlotPropsOverrides, CheckboxOwnerState>;
      input?: SlotComponentProps<'input', CheckboxInputSlotPropsOverrides, CheckboxOwnerState>;
    };
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots?: CheckboxSlots;
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: unknown;
  };

export interface CheckboxSlots {
  /**
   * The component that renders the root.
   * @default 'div'
   */
  root?: React.ElementType;
  /**
   * The component that renders the input.
   * @default 'input'
   */
  input?: React.ElementType;
}

export interface CheckboxTypeMap<
  AdditionalProps = {},
  RootComponentType extends React.ElementType = 'div',
> {
  props: CheckboxOwnProps & AdditionalProps;
  defaultComponent: RootComponentType;
}

export type CheckboxProps<
  RootComponentType extends React.ElementType = CheckboxTypeMap['defaultComponent'],
> = PolymorphicProps<CheckboxTypeMap<{}, RootComponentType>, RootComponentType>;

export type CheckboxOwnerState = Simplify<
CheckboxOwnProps & {
    formControlContext: FormControlState | undefined;
    focused: boolean;
    type: React.InputHTMLAttributes<HTMLInputElement>['type'] | undefined;
  }
>;

export type CheckboxRootSlotProps = Simplify<
  UseCheckboxRootSlotProps & {
    ownerState: CheckboxOwnerState;
    className?: string;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
  }
>;

export type CheckboxInputSlotProps = Simplify<
  Omit<UseCheckboxRootSlotProps, 'onClick'> & {
    'aria-describedby': React.AriaAttributes['aria-describedby'];
    'aria-label': React.AriaAttributes['aria-label'];
    'aria-labelledby': React.AriaAttributes['aria-labelledby'];
    autoComplete: string | undefined;
    autoFocus: boolean | undefined;
    className?: string;
    id: string | undefined;
    name: string | undefined;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyUp: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    ownerState: CheckboxOwnerState;
    placeholder: string | undefined;
    readOnly: boolean | undefined;
    ref: React.Ref<HTMLInputElement>;
    type: React.HTMLInputTypeAttribute | undefined;
  }
>;
