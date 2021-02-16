import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'content',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'year', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'poster', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});

export default schema;
