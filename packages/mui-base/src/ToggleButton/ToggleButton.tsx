import * as React from 'react';
import PropTypes from 'prop-types';
import { PolymorphicComponent } from '../utils/PolymorphicComponent';
import composeClasses from '../composeClasses';
import { getToggleButtonUtilityClass } from './toggleButtonClasses';
import {
  ToggleButtonProps,
  ToggleButtonTypeMap,
  ToggleButtonRootSlotProps,
  ToggleButtonOwnerState,
} from './ToggleButton.types';
import useToggleButton from '../useToggleButton';
import { WithOptionalOwnerState } from '../utils/types';
import { useSlotProps } from '../utils';
import { useClassNamesOverride } from '../utils/ClassNameConfigurator';

const useUtilityClasses = (ownerState: ToggleButtonOwnerState) => {
  const { active, disabled, focusVisible } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active'],
  };

  return composeClasses(slots, useClassNamesOverride(getToggleButtonUtilityClass));
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [ToggleButton](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ToggleButton API](https://mui.com/base/react-button/components-api/#button)
 */
const ToggleButton = React.forwardRef(function ToggleButton<
  RootComponentType extends React.ElementType,
>(props: ToggleButtonProps<RootComponentType>, forwardedRef: React.ForwardedRef<Element>) {
  const {
    action,
    children,
    disabled,
    focusableWhenDisabled = false,
    onFocusVisible,
    slotProps = {},
    slots = {},
    ...other
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement | HTMLAnchorElement | HTMLElement>();

  const { active, focusVisible, setFocusVisible, getRootProps } = useToggleButton({
    ...props,
    focusableWhenDisabled,
  });

  React.useImperativeHandle(
    action,
    () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current!.focus();
      },
    }),
    [setFocusVisible],
  );

  const ownerState: ToggleButtonOwnerState = {
    ...props,
    active,
    focusableWhenDisabled,
    focusVisible,
  };

  const classes = useUtilityClasses(ownerState);

  const defaultElement = other.href || other.to ? 'a' : 'button';
  const Root: React.ElementType = slots.root ?? defaultElement;
  const rootProps: WithOptionalOwnerState<ToggleButtonRootSlotProps> = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef,
    },
    ownerState,
    className: classes.root,
  });

  return <Root {...rootProps}>{children}</Root>;
}) as PolymorphicComponent<ToggleButtonTypeMap>;

ToggleButton.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.shape({
        focusVisible: PropTypes.func.isRequired,
      }),
    }),
  ]),
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: PropTypes.bool,
  /**
   * @ignore
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  onFocusVisible: PropTypes.func,
  /**
   * The props used for each slot inside the ToggleButton.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
  /**
   * The components used for each slot inside the ToggleButton.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType,
  }),
  /**
   * @ignore
   */
  to: PropTypes.string,
} as any;

export default ToggleButton;
