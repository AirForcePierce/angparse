import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import AddController from './controllers/addcontroller';
import ListController from './controllers/listcontroller';


angular
.module('app', ['ui.router'])
.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {
      'X-Parse-Application-Id': 'fjX7nUYwr1L83Bf8DapCyDKWMGxaKa2A68LacU1T',
      'X-Parse-REST-API-Key': 'UV25fSnRriVgBgWLHDghnVhC7PGxkg3ys289EJQm'
    }
  }
})
.config(config)
.controller('AddController', AddController)
.controller('ListController', ListController);

console.log('Hello, World');
