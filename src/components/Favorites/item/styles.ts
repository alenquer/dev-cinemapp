import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Poster = styled.Image`
  width: 50px;
  height: 70px;
  border-radius: 4px;
  background-color: red;
`;

export const Description = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const Metadata = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Save = styled.TouchableOpacity``;
