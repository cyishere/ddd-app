import type { CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

interface AvatarProps {
  size?: "normal" | "large";
  imageUrl: string;
}

const _STYLES = {
  normal: {
    "--borderWidth": "0px",
    "--borderColor": "transparent",
    "--shadow": "none",
  },
  large: {
    "--borderWidth": "4px",
    "--borderColor": "var(--clr-white)",
    "--shadow": "var(--bs-md)",
  },
};

const SIZES = {
  normal: "48px",
  large: "96px",
};

const Avatar: React.FC<AvatarProps> = ({ size = "normal", imageUrl }) => {
  const styles = { ..._STYLES[size], "--diameter": SIZES[size] };
  const imageSize = Number(SIZES[size].split("px")[0]);

  return (
    <Wrapper style={styles as CSSProperties}>
      <Image src={imageUrl} alt="" width={imageSize} height={imageSize} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: var(--gradient-placeholder);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--borderWidth);
  border-color: var(--borderColor);
  box-shadow: var(--shadow);
  width: var(--diameter);
  height: var(--diameter);
  overflow: hidden;
  display: grid;
  place-content: center;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export default Avatar;
