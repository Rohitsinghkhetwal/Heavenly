import { TextProps } from "react-native";
import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";

type TypographyVariant = 'title' | 'subtitle' | 'body'| 'caption' | 'button' | 'display' | 'caption-primary'| 'body-primary';

interface TextComponentProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
  title: 'text-2xl font-bold',
  subtitle: 'text-xl font-semibold',
  body: 'text-base',
  'body-primary': 'text-base text-primary',
  caption: 'text-sm font-medium ',
  'caption-primary': 'text-sm text-primary font-medium',
  button: 'text-xl text-primary font-semibold text-white text-center',
  display: 'text-3xl font-bold',
};

const Text = ({
  variant = 'title',
  children,
  className,
  ...props
}: TextComponentProps) => {
  const textStyle = twMerge('text-black', variantStyles[variant], className);
  return <RNText className={textStyle} { ...props}>{children}</RNText>
};

export default Text;
