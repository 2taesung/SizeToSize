import { useEffect } from 'react';
import { styled } from 'styled-components';

const getTest = async () => {
  const response = await fetch('http://localhost:3000/test');
  const data = await response.json();

  console.log(data);
};

export const TestLint = () => {
  useEffect(() => {
    getTest();
  }, []);
  return (
    <Container>
      <h1>development env:{process.env.NEXT_PUBLIC_TEST_DEV || '없음'}</h1>
      <h1>
        production env:{process.env.NEXT_PUBLIC_TEST_PRODUCTION || '없음'}
      </h1>
      <div>프리텐다드</div>
      <div>git hooks test2</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: solid 10px black;

  background-color: aqua;
`;
