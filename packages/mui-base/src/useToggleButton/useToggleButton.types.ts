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
}
