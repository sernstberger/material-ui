import * as React from 'react';
import { UseButtonRootSlotProps } from '../useButton';

export interface UseToggleButtonParameters {
  /**
   * If `true`, the toggle button will be disabled.
   */
  onChange?: (event: React.SyntheticEvent, value: number | string) => void;
  /**
   * Callback fired when the toggle button is clicked.
   */
  onClick?: React.MouseEventHandler;
  /**
   * If `true`, the toggle button will be disabled.
   */
  disabled?: boolean;
  /**
   * The id of the toggle button.
   * If not provided, it will be automatically generated.
   */
  id?: string;
  /**
   * Ref to the root slot's DOM element.
   */
  rootRef?: React.Ref<Element>;

  /** Not sure if I actually want this */
  value: any;
}

export type UseToggleButtonRootSlotProps<TOther = {}> = UseButtonRootSlotProps<TOther> & {
  'aria-controls': React.AriaAttributes['aria-controls'];
  'aria-selected': React.AriaAttributes['aria-selected'];
  id: string | undefined;
  ref: React.RefCallback<Element> | null;
  role: React.AriaRole;
};

export interface UseToggleButtonReturnValue {
  /**
   * Resolver for the root slot's props.
   * @param externalProps props for the root slot
   * @returns props that should be spread on the root slot
   */
  getRootProps: <TOther extends Record<string, any> = {}>(
    externalProps?: TOther,
  ) => UseToggleButtonRootSlotProps<TOther>;
  /**
   * If `true`, the toggle button is active (as in `:active` pseudo-class; in other words, pressed).
   */
  active: boolean;
  /**
   * If `true`, the toggle button has visible focus.
   * This is a workaround for browsers that do not support this feature natively.
   */
  focusVisible: boolean;
  /**
   * If `true`, the toggle button is highlighted.
   */
  highlighted: boolean;
  /**
   * 0-based index of the toggle button in the list of toggle buttons.
   */
  index: number;
  /**
   * Ref to the root slot's DOM element.
   */
  rootRef: React.RefCallback<Element> | null;
  /**
   * If `true`, the toggle button is selected.
   */
  selected: boolean;
  /**
   * Sets the focus-visible state of the toggle button.
   * This is a workaround for browsers that do not support this feature natively.
   */
  setFocusVisible: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Total number of toggle buttons in the nearest parent ToggleButtonGroup.
   * This can be used to determine if the toggle button is the last one to style it accordingly.
   */
  // totalToggleButtonsCount: number;
}
