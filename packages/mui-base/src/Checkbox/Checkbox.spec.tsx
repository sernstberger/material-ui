import * as React from 'react';
import { expectType } from '@mui/types';
import { Checkbox, CheckboxInputSlotProps, CheckboxRootSlotProps } from '@mui/base/Checkbox';

const CheckboxRoot = React.forwardRef(function CheckboxRoot(
  props: CheckboxRootSlotProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { ownerState, ...other } = props;
  return <div data-focused={ownerState.focused} {...other} ref={ref} />;
});

const CheckboxInput = React.forwardRef(function CheckboxInput(
  props: CheckboxInputSlotProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const { ownerState, ...other } = props;
  return <input data-focused={ownerState.focused} {...other} ref={ref} type="checkbox" />;
});

const styledInput = <Checkbox slots={{ root: CheckboxRoot, input: CheckboxInput }} />;

const polymorphicComponentTest = () => {
  const CustomComponent: React.FC<{ stringProp: string; numberProp: number }> =
    function CustomComponent() {
      return <div />;
    };

  return (
    <div>
      {/* @ts-expect-error */}
      <Checkbox invalidProp={0} />

      <Checkbox<'a'>
        slots={{
          root: 'a',
        }}
        href="#"
      />

      <Checkbox<typeof CustomComponent>
        slots={{
          root: CustomComponent,
        }}
        stringProp="test"
        numberProp={0}
      />
      {/* @ts-expect-error */}
      <Checkbox<typeof CustomComponent>
        slots={{
          root: CustomComponent,
        }}
      />

      <Checkbox<'button'>
        slots={{
          root: 'button',
        }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.checkValidity()}
      />

      <Checkbox<'button'>
        slots={{
          root: 'button',
        }}
        ref={(elem) => {
          expectType<HTMLButtonElement | null, typeof elem>(elem);
        }}
        onMouseDown={(e) => {
          expectType<React.MouseEvent<HTMLButtonElement, MouseEvent>, typeof e>(e);
          e.currentTarget.checkValidity();
        }}
      />
    </div>
  );
};
