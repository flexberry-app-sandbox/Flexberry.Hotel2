import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hotel-а-о-п-и-l');
  this.route('i-i-s-hotel-а-о-п-и-e',
  { path: 'i-i-s-hotel-а-о-п-и-e/:id' });
  this.route('i-i-s-hotel-а-о-п-и-e.new',
  { path: 'i-i-s-hotel-а-о-п-и-e/new' });
  this.route('i-i-s-hotel-админ-l');
  this.route('i-i-s-hotel-админ-e',
  { path: 'i-i-s-hotel-админ-e/:id' });
  this.route('i-i-s-hotel-админ-e.new',
  { path: 'i-i-s-hotel-админ-e/new' });
  this.route('i-i-s-hotel-анкета-к-l');
  this.route('i-i-s-hotel-анкета-к-e',
  { path: 'i-i-s-hotel-анкета-к-e/:id' });
  this.route('i-i-s-hotel-анкета-к-e.new',
  { path: 'i-i-s-hotel-анкета-к-e/new' });
  this.route('i-i-s-hotel-гостиница-l');
  this.route('i-i-s-hotel-гостиница-e',
  { path: 'i-i-s-hotel-гостиница-e/:id' });
  this.route('i-i-s-hotel-гостиница-e.new',
  { path: 'i-i-s-hotel-гостиница-e/new' });
  this.route('i-i-s-hotel-должность-l');
  this.route('i-i-s-hotel-должность-e',
  { path: 'i-i-s-hotel-должность-e/:id' });
  this.route('i-i-s-hotel-должность-e.new',
  { path: 'i-i-s-hotel-должность-e/new' });
  this.route('i-i-s-hotel-ж-р-и-г-l');
  this.route('i-i-s-hotel-ж-р-и-г-e',
  { path: 'i-i-s-hotel-ж-р-и-г-e/:id' });
  this.route('i-i-s-hotel-ж-р-и-г-e.new',
  { path: 'i-i-s-hotel-ж-р-и-г-e/new' });
  this.route('i-i-s-hotel-пасп-данные-l');
  this.route('i-i-s-hotel-пасп-данные-e',
  { path: 'i-i-s-hotel-пасп-данные-e/:id' });
  this.route('i-i-s-hotel-пасп-данные-e.new',
  { path: 'i-i-s-hotel-пасп-данные-e/new' });
  this.route('i-i-s-hotel-персонал-l');
  this.route('i-i-s-hotel-персонал-e',
  { path: 'i-i-s-hotel-персонал-e/:id' });
  this.route('i-i-s-hotel-персонал-e.new',
  { path: 'i-i-s-hotel-персонал-e/new' });
});

export default Router;
