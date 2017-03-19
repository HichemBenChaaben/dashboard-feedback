import angular from 'angular';
import { Dashboard } from './app/Dashboard';
import { Rating } from './app/components/rating/Rating';

import './index.scss';

export const app = 'app';

angular
  .module(app, [])
  .component('app', Dashboard)
  .component('rating', Rating);
