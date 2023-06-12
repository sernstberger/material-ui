import * as React from 'react';
import { Simplify } from '@mui/types';
import { UseToggleButtonParameters, UseToggleButtonRootSlotProps } from '../useToggleButton';
import { SlotComponentProps } from '../utils';
import { PolymorphicProps } from '../utils/PolymorphicComponent';

export interface ToggleButtonActions {
  focusVisible(): void;
}

export interface ToggleButtonRootSlotPropsOverrides {}

export interface ToggleButtonOwnProps extends Omit<UseToggleButtonParameters, 'ref'> {
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action?: React.Ref<ToggleButtonActions>;
  children?: React.ReactNode;
  className?: string;
  /**
   * The props used for each slot inside the ToggleButton.
   * @default {}
   */
  slotProps?: {
    root?: SlotComponentProps<'button', ToggleButtonRootSlotPropsOverrides, ToggleButtonOwnerState>;
  };
  /**
   * The components used for each slot inside the ToggleButton.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots?: ToggleButtonSlots;

  value: any;
}

export interface ToggleButtonSlots {
  /**
   * The component that renders the root.
   * @default props.href || props.to ? 'a' : 'button'
   */
  root?: React.ElementType;
}

export type ToggleButtonProps<
  RootComponentType extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
> = PolymorphicProps<ToggleButtonTypeMap<{}, RootComponentType>, RootComponentType>;

export interface ToggleButtonTypeMap<
  AdditionalProps = {},
  RootComponentType extends React.ElementType = 'button',
> {
  props: ToggleButtonOwnProps & AdditionalProps;
  defaultComponent: RootComponentType;
}

export type ToggleButtonOwnerState = Simplify<
  ToggleButtonOwnProps & {
    active: boolean;
    focusVisible: boolean;
  }
>;

export type ToggleButtonRootSlotProps = Simplify<
  UseToggleButtonRootSlotProps & {
    ownerState: ToggleButtonOwnerState;
    className?: string;
    children?: React.ReactNode;
  }
>;
