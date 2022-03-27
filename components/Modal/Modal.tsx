import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";

interface ModalProps {
  showDialog: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ showDialog, close, children }) => {
  return (
    <Wrapper isOpen={showDialog} onDismiss={close}>
      <Content>{children}</Content>
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

export default Modal;
