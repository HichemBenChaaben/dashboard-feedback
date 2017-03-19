import angular from 'angular';
import { Dashboard } from './app/Dashboard';
import './index.scss';

export const app = 'app';

angular
  .module(app, [])
  .component('app', Dashboard);
