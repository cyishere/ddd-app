import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LogoBlock1 />
      <LogoBlock2 />
      <LogoBlock3 />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const LogoBlock1 = styled.div`
  background-color: hsl(274deg 54% 45%);
`;

const LogoBlock2 = styled.div`
  background-color: hsl(274deg 37% 76%);
`;

const LogoBlock3 = styled.div`
  background-color: hsl(274deg 31% 79%);
`;

export default Logo;
