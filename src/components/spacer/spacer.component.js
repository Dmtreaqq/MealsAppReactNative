import styled from "styled-components/native";

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position = "top", size = "small", theme) => {
  const sizeIndex = sizesVariant[size];
  const property = positionsVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}: ${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;
