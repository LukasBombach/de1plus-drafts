import styled from "styled-components";

export interface HrProps {
  height?: number;
}

export default styled.hr`
  height: ${({ height = 32 }: HrProps) => height}px;
  border: 0;
`;
