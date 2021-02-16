import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Database } from '@nozbe/watermelondb';

import { IResponse } from '../../../@types';
import {
  Container,
  Metadata,
  Poster,
  Save,
  Title,
  Description,
} from './styles';
import Content from '../../../database/models/content';

interface ICard {
  data: IResponse;
  database: Database;
}

const SearchItem: React.FC<ICard> = ({ data, database }) => {
  const [isSaved, setSavedStatus] = useState(false);
  const content = database.collections.get<Content>('content');

  async function handleSave() {
    await content
      .find(data.imdbID)
      .then((res) => {
        res.delete();
        setSavedStatus(false);
      })
      .catch(() => {
        setSavedStatus(true);
        database.action(async () => {
          await content.create((item) => {
            item.title = data.Title;
            item.type = data.Type;
            item.poster = data.Poster;
            item.year = data.Year;
            item._raw.id = data.imdbID;
          });
        });
      });
  }

  useEffect(() => {
    async function check() {
      await content
        .find(data.imdbID)
        .then(() => setSavedStatus(true))
        .catch(() => setSavedStatus(false));
    }
    check();
  }, []);

  return (
    <Container>
      <Poster
        resizeMode="contain"
        source={{
          uri: data.Poster,
        }}
      />
      <Metadata>
        <Title numberOfLines={1}>{data.Title}</Title>
        <Description>{data.Type}</Description>
        <Description>{data.Year}</Description>
      </Metadata>
      <Save onPress={handleSave}>
        <Icon
          name={isSaved ? 'star' : 'star-outline'}
          size={25}
          color="orange"
        />
      </Save>
    </Container>
  );
};

export default SearchItem;
