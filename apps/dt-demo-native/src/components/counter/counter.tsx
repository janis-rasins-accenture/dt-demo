import React from 'react';
import {
  StyledView,
  StyledText,
  StyledButtonsContainer,
  StyledTextContainer,
} from './counter.styles';
import { StandardButton } from '@dt-demo/buttons-native';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handlePressIncrement = () => {
    setCounter(counter + 1);
  };

  const handlePressDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <StyledView>
      <StyledTextContainer>
        <StyledText>{counter}</StyledText>
      </StyledTextContainer>
      <StyledButtonsContainer>
        <StandardButton label="Increment" onPress={handlePressIncrement} />
        <StandardButton label="Decrement" $variant="secondary" onPress={handlePressDecrement} />
      </StyledButtonsContainer>
    </StyledView>
  );
};

export default Counter;
