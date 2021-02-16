import { Model } from '@nozbe/watermelondb';
import { action, date, field, readonly } from '@nozbe/watermelondb/decorators';

export default class Content extends Model {
  static table = 'content';

  @action async delete() {
    await this.markAsDeleted(); // syncable
    await this.destroyPermanently(); // permanent
  }

  @field('title') title!: string;
  @field('year') year!: string;
  @field('type') type!: string;
  @field('poster') poster!: string;
  @readonly @date('created_at') createdAt!: number;
  @readonly @date('updated_at') updatedAt!: number;
}
