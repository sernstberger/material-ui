import * as React from 'react';
import Input from './packages/mui-joy/src/Input/Input';

// Simple test component to verify Input works with Base UI
const TestInput = () => {
  const [value, setValue] = React.useState('');
  
  return (
    <div>
      <Input
        placeholder="Test input with Base UI"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        startDecorator="🔍"
        endDecorator="✨"
      />
    </div>
  );
};

export default TestInput;