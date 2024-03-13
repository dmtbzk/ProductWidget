export type WidgetColor = 'green' | 'blue' | 'beige' | 'white' | 'black';

export const colorStyles: Record<WidgetColor, { textClass: string, bgClass: string, logoFill: string }> = {
  green: {
    textClass: 'text-white',
    bgClass: 'bg-green',
    logoFill: '#FFFFFF',
  },
  blue: {
    textClass: 'text-white',
    bgClass: 'bg-blue',
    logoFill: '#FFFFFF',
  },
  beige: {
    textClass: 'text-green',
    bgClass: 'bg-beige',
    logoFill: '#3B755F',
  },
  white: {
    textClass: 'text-black',
    bgClass: 'bg-white',
    logoFill: '#000000',
  },
  black: {
    textClass: 'text-white',
    bgClass: 'bg-black',
    logoFill: '#FFFFFF',
  },
};

export const getStylesForColor = (color: WidgetColor) => {
  return colorStyles[color];
};
