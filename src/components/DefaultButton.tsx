import { Button } from "@chakra-ui/react";

interface DefaultButtonProps {
  text: string;
  color?: string;
  bg?: string;
  variant?: string;
  size?: string;
}

const DefaultButton = (props: DefaultButtonProps) => {
  const { text } = props;
  const buttonProps = {
    size: "lg",
    variant: "solid",
    bg: "#6F2DBD",
    color: "white",
    ...props
  } satisfies DefaultButtonProps;
  return (
    <Button {...buttonProps}>
      {text}
    </Button>
  );
};

export default DefaultButton;
