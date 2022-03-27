import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";
import { Button, ButtonLink } from "../Button";
import { DotIcon } from "../Decorations";
import { TextLgMedium, TextMdNormal } from "../Typography";

interface ModalProps {
  showDialog: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ showDialog, close }) => {
  return (
    <Wrapper isOpen={showDialog}>
      <Content>
        <DotIcon />
        <Title>How about login?</Title>
        <Text>
          After login, we can store your learning progress and use SRS algorithm
          to help you.
        </Text>
        <Actions>
          <Button onClick={close}>Next Time</Button>
          <ButtonLink variant="primary" href="/api/login">
            Login
          </ButtonLink>
        </Actions>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
  display: grid;
  place-content: center;
`;

const Content = styled(DialogContent)`
  max-width: 22.5rem;
  background-color: var(--clr-white);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  ${TextLgMedium}
  color: var(--clr-gray-900);
  margin-top: 1.25rem;
`;

const Text = styled.p`
  ${TextMdNormal}
  color: var(--clr-gray-500);
  text-align: center;
  margin-top: 0.5rem;
`;

const Actions = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export default Modal;
