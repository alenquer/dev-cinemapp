import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20, paddingBottom: 15 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Separator = styled.View`
  margin-bottom: 15px;
`;
