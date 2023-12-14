import { Serializer as АОПИSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-а-о-п-и';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АОПИSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
