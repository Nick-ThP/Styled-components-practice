import { Button, NoCompButton, ButtonLabel } from './Components/Button.style';
import { Container } from './Components/Container.style';
import { GlobalStyle } from './GlobalStyle.style';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <NoCompButton backgroundColor="red">
        <ButtonLabel>This is a button</ButtonLabel>
      </NoCompButton>
      <Button buttonLabel="Click Here" backgroundColor="violet"></Button>
    </Container>
  );
}

export default App;
