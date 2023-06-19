'use client';

import { Test } from './styled';

import { TestLint } from '@src/components/lintTest';

import { styled } from 'styled-components';

export default function Page() {
  return (
    <Container>
      <div>result page</div>
      <Test />
      <TestLint />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: solid 10px black;

  background-color: aqua;

  color: #1a3c7f;
`;
