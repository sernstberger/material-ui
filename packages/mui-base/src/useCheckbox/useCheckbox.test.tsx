import * as React from 'react';
import { act, createRenderer } from '@mui-internal/test-utils';
import { expect } from 'chai';
import { spy } from 'sinon';
import { useCheckbox } from './useCheckbox';
import { UseInputParameters } from './useCheckbox.types';

describe('useCheckbox', () => {
  const { render } = createRenderer();
  describe('params: inputRef', () => {
    it('should be able to attach input ref passed through params', () => {
      const inputRef = React.createRef<HTMLInputElement>();

      function Input() {
        const { getInputProps } = useCheckbox({
          inputRef,
        });
        return <input {...getInputProps()} />;
      }
      const { getByRole } = render(<Input />);

      expect(inputRef.current).to.deep.equal(getByRole('textbox'));
    });
  });

  describe('prop: disabled', () => {
    it('should reset the focused state if getting disabled', () => {
      const handleBlur = spy();
      const handleFocus = spy();

      function Input(props: UseInputParameters) {
        const { getInputProps } = useCheckbox(props);

        return <input {...getInputProps()} />;
      }
      const { getByRole, setProps } = render(<Input onBlur={handleBlur} onFocus={handleFocus} />);

      act(() => {
        getByRole('textbox').focus();
      });
      expect(handleFocus.callCount).to.equal(1);

      setProps({ disabled: true });

      expect(handleBlur.callCount).to.equal(1);
      // check if focus not initiated again
      expect(handleFocus.callCount).to.equal(1);
    });
  });

  describe('external props', () => {
    it('prop getter functions should forward arbitrary props to the corresponding slot', () => {
      const rootRef = React.createRef<HTMLDivElement>();

      function Input() {
        const { getRootProps, getInputProps } = useCheckbox();
        return (
          <div {...getRootProps({ 'data-testid': 'test-root-slot', ref: rootRef })}>
            <input {...getInputProps({ 'data-testid': 'test-input-slot' })} />
          </div>
        );
      }
      const { getByRole } = render(<Input />);

      expect(rootRef.current).to.have.attribute('data-testid', 'test-root-slot');

      expect(getByRole('textbox')).to.have.attribute('data-testid', 'test-input-slot');
    });
  });
});
