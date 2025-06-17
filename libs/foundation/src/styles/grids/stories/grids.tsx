import { Breakpoints, Container, Col, Row, breakpoints } from '../index';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './grids.module.css';

const StyledP = styled.p`
  background-color: ${({ theme }) => theme.colors['button-primary-container-color']};
  padding: 1rem;
  margin: 0;
  ${({ theme }) => theme.typography['label-small-bold-title-case']}
  color: ${({ theme }) => theme.colors['button-primary-label-text-color']};
  flex: 1 auto;
`;

const StyledTitle = styled.h4`
  ${({ theme }) => theme.typography['title-large-bold']}
  margin: 1rem 0 .5rem;
`;

const Grids: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState('xs');

  const handleWindowSizeChange = () => {
    const keys = Object.keys(breakpoints) as (keyof Breakpoints)[];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const breakpoint = breakpoints[key];
      const nextBreakpoint = i < keys.length - 1 ? breakpoints[keys[i + 1]] : undefined;

      if (
        window.innerWidth >= breakpoint['min-width'] &&
        (nextBreakpoint ? window.innerWidth < nextBreakpoint['min-width'] : true)
      ) {
        setScreenWidth(key.replace('$', ''));
        break;
      }
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <Container $isFullWidth>
      <Row>
        <Col $xs={12}>
          <StyledTitle>Screen width: {screenWidth}</StyledTitle>
        </Col>
      </Row>
      <Row>
        <Col $xs={6} $s={8} $m={12} $l={4} className={styles.dFlex}>
          <StyledP>xs=6 s=8 m=12 l=4</StyledP>
        </Col>
        <Col $xs={6} $s={4} className={styles.dFlex}>
          <StyledP>xs=6 s=4</StyledP>
        </Col>
        <Col $xs={8} $s={4} className={styles.dFlex}>
          <StyledP>xs=8 s=4</StyledP>
        </Col>
        <Col $xs={4} $l={6} className={styles.dFlex}>
          <StyledP>xs=4 l=6</StyledP>
        </Col>
      </Row>
    </Container>
  );
};

export default Grids;
