import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  error: boolean;
}

export const Container = styled(LinearGradient).attrs({
  colors: ['#FC7504', '#FF913A'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 10px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #fff;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${(props: IProps) => (props.error ? '#FF7272' : '#FFf')};
`;

export const Button = styled.TouchableOpacity`
  background-color: #ff9946;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;
