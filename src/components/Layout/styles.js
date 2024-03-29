import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'app',
})`
  display: flex;
  min-height: 100vh;

  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%),
    url('/img/background.png');
  background-size: 300px 240px;
`;

export const Content = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 120px;
`;
