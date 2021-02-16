import React from 'react';
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';

import { Container, Wrapper } from './styles';
import { IResponse } from '../../@types';
import SearchItem from './item';

interface IParams {
  key: string;
  data: [];
}

const SearchScreen: React.FC = () => {
  const database = useDatabase();
  const route = useRoute<Route<string, IParams>>();
  const navigation = useNavigation();

  const { key, data } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: key,
    });
  });

  return (
    <Container>
      <Wrapper>
        {data.map((i: IResponse) => (
          <SearchItem database={database} key={i.imdbID} data={i} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default SearchScreen;
