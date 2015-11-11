import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import AddController from './controllers/addcontroller';
import ListController from './controllers/listcontroller';


angular
.module('app', ['ui.router'])
.config(config)
.controller('AddController', AddController)
.controller('ListController', ListController);

console.log('Hello, World');
