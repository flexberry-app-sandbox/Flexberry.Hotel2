import { Serializer as ГостиницаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-гостиница';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГостиницаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
