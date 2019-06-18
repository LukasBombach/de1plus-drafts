import React from "react";
import styled from "styled-components";

export interface CircleProps {
  size?: string;
}

interface DivProps {
  size?: string;
}

const SizeWrapper = styled.div`
  width: ${(props: DivProps) => props.size};
  display: inline-block;
`;

const RoundEl = styled.a`
  display: block;
  width: 100%;
  padding-top: calc(100%);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(24, 144, 255, 0.4),
    0 0 0 12px rgba(24, 144, 255, 0.2);
  background: #fff;
  position: relative;
`;

const AlignCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Circle: React.FunctionComponent<CircleProps> = ({
  children,
  size = "100%",
  ...props
}) => (
  <SizeWrapper size={size} {...props}>
    <RoundEl>
      <AlignCenterDiv>{children}</AlignCenterDiv>
    </RoundEl>
  </SizeWrapper>
);

export default Circle;
