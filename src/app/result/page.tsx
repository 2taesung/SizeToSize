'use client';

import { Test } from './styled';

import { countAtom } from '@src/lib/atoms';

import { useAtomValue } from 'jotai';
import { styled } from 'styled-components';

export default function Page() {
  const count = useAtomValue(countAtom);

  return (
    <Container>
      <div>result page</div>
      {count}
      <Test />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: solid 10px black;

  background-color: aqua;

  color: #1a3c7f;
`;
