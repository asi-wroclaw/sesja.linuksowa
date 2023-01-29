import { Button } from "@chakra-ui/react";

interface DefaultButtonProps {
  text: string;
  color?: string;
  bg?: string;
  variant?: string;
  size?: string;
}

const DefaultButton = (Props: DefaultButtonProps) => {
  const {
    size = "lg",
    variant = "solid",
    bg = "#6F2DBD",
    color = "white",
    text,
  } = Props;
  return (
    <Button size={size} variant={variant} bg={bg} color={color}>
      {text}
    </Button>
  );
};

export default DefaultButton;
