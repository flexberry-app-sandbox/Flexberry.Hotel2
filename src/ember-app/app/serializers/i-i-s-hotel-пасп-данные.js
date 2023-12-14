import { Serializer as ПаспДанныеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-пасп-данные';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПаспДанныеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
