'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('templateApp.signup', [])
    .controller('SignupController', SignupController)
    .name;
