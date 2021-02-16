import React, { useCallback } from 'react';
import { Database, Q } from '@nozbe/watermelondb';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

import { List, Separator } from './styles';
import CineCard from './item';

interface IComponent {
  items?: any;
}

interface IObservables {
  items?: IComponent;
  database: Database;
  search: string;
  filter: string;
}

const Favorites: React.FC<IComponent> = ({ items }) => {
  const keyExtractor = useCallback((item) => item.id, []);
  const renderItem = useCallback(({ item }) => <CineCard item={item} />, []);

  return (
    <List
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

const enhance = withObservables<IObservables, {}>(
  ['items', 'filter', 'search'],
  ({ database, search, filter }) => ({
    items: database.collections
      .get('content')
      .query(
        Q.experimentalSortBy('updated_at', Q.desc),
        Q.and(
          Q.where('title', Q.like(`%${Q.sanitizeLikeString(search)}%`)),
          Q.where('type', filter ? Q.eq(filter) : Q.notEq(null)),
        ),
      ),
  }),
);

export default withDatabase(enhance(Favorites));
