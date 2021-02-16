import withObservables from '@nozbe/with-observables';
import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import {
  Container,
  Metadata,
  Poster,
  Save,
  Title,
  Description,
} from './styles';
import Content from '../../../database/models/content';

interface IData {
  id: string;
  poster: string;
  title: string;
  type: string;
  year: string;
}

interface ICard {
  item: IData;
}

const CineCard: React.FC<ICard> = ({ item }) => {
  const database = useDatabase();
  const content = database.collections.get<Content>('content');

  async function handleDelete() {
    const result = await content.find(item.id);
    result.delete();
  }

  return (
    <Container>
      <Poster resizeMode="contain" source={{ uri: item.poster }} />
      <Metadata>
        <Title numberOfLines={1}>{item.title}</Title>
        <Description>{item.type}</Description>
        <Description>{item.year}</Description>
      </Metadata>
      <Save onPress={handleDelete}>
        <Icon name="star" size={25} color="orange" />
      </Save>
    </Container>
  );
};

const enhance = withObservables(['item'], ({ item }) => ({
  item,
}));

export default memo(enhance(CineCard));
