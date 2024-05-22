declare module '*.png' {
  const value: string;
  export default value;
}

declare module 'react-native-vector-icons/Entypo' {
  import { Icon } from 'react-native-vector-icons/Icon';
  import { TextProps } from 'react-native';

  export interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  export default class Entypo extends React.Component<IconProps> {}
}