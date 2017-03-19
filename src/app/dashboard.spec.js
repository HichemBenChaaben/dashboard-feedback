import angular from 'angular';
import 'angular-mocks';
import { Dashboard } from './Dashboard';

describe('dashboard component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/dashboard.html'])
      .component('app', Dashboard);
    angular.mock.module('app');
  });

  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const container = element.find('div').length
    expect(container).toBeGreaterThan(0);
  }));

  it('shoud call filterResults after the init method', angular.mock.inject($componentController => {
    const bindings = {
      filterResults: () => {}
    };
    const component = $componentController('app', {}, bindings);
    spyOn(component, 'filterResults').and.callThrough();
    component.filterResults();
    expect(component.filterResults).toHaveBeenCalled();
  }));

  it('shoud call getCountries after the init method', angular.mock.inject($componentController => {
    const bindings = {
      getCountries: () => {}
    };
    const component = $componentController('app', {}, bindings);
    spyOn(component, 'getCountries').and.callThrough();
    component.getCountries();
    expect(component.getCountries).toHaveBeenCalled();
  }));

});
