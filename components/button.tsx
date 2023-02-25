import tw, { styled } from 'twin.macro';

const StyledButton = styled('button')`
  ${tw`text-red-500 text-3xl`}
`;

const Button = () => {
  return <StyledButton>Test</StyledButton>;
};

export default Button;
