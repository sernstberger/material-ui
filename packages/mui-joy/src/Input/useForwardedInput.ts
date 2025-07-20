'use client';
import * as React from 'react';
import { Input } from '@base-ui-components/react/input';
import FormControlContext, { FormControlContextValue } from '../FormControl/FormControlContext';

export default function useForwardedInput<Output>(
  props: any,
  classes: { disabled: string; error: string; focused: string; formControl: string },
) {
  const formControl = React.useContext(FormControlContext);
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled: disabledProp,
    disabledInProp,
    error: errorProp,
    id,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    type,
    value,
    ...other
  } = props;

  // Base UI Input uses internal state management, so we need to track state manually
  const [focused, setFocused] = React.useState(false);
  const disabled = disabledInProp ?? formControl?.disabled ?? disabledProp;
  const error = errorProp;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(event);
  };

  const getRootProps = () => ({
    onClick,
  });

  const getInputProps = () => ({
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    id,
    name,
    onBlur: handleBlur,
    onChange,
    onFocus: handleFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    required: required ?? formControl?.required,
    type,
    value,
    // Base UI Input specific props
    onValueChange: (newValue: string, event: Event) => {
      if (onChange) {
        // Create a synthetic event that matches React's ChangeEvent interface
        const inputElement = event.target as HTMLInputElement;
        inputElement.value = newValue;
        
        const syntheticEvent = {
          ...event,
          target: inputElement,
          currentTarget: inputElement,
          nativeEvent: event as any,
          isDefaultPrevented: () => false,
          isPropagationStopped: () => false,
          persist: () => {},
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    },
  });

  const rootStateClasses = {
    [classes.disabled]: disabled,
    [classes.error]: error,
    [classes.focused]: focused,
    [classes.formControl]: Boolean(formControl),
    [className!]: className,
  };

  const inputStateClasses = {
    [classes.disabled]: disabled,
  };

  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    disabled,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type,
  };
  return {
    formControl,
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    focused,
    error,
    disabled,
    ...other,
  } as {
    propsToForward: Record<string, any>;
    rootStateClasses: Record<string, any>;
    inputStateClasses: Record<string, any>;
    getRootProps: () => Record<string, any>;
    getInputProps: () => Record<string, any>;
    focused: boolean;
    error: boolean;
    disabled: boolean;
    formControl: FormControlContextValue;
  } & Output;
}
