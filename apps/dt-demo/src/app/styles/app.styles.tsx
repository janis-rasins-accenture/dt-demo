import styled from 'styled-components';

export const StyledApp = styled.div`
  padding: 15px;
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => theme.typography['title-large-bold']}
  margin-bottom: ${({ theme }) => theme.floats['margin-large']};
`;
