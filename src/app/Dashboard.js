import * as utils from './utils';

class DashboardController {
  /**@ngInject */
  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
  }
  $onInit() {
    this.ratingScale = utils.getRangeFromNumber(5);
    this.filters = {
      rating: {
        activated: false,
        payload: []
      },
      keyword: undefined,
      country: undefined
    };
    this.results = [];
    const url = 'http://cache.usabilla.com/example/apidemo.json';
    this.$http.get(url)
      .then(res => {
        this.results = res.data.items;
        this.dataPayLoad = res.data.items;
        this.countries = this.getCountries(res.data.items);
        this.filterResults();
      }).catch(err => {
        // handle some b.l here
        this.$log.error(err);
      });
  };
  /**
   * get the unique list of countries based on the county list
   */
  getCountries(arr) {
    return arr.map(item => {
      return item.computed_location;
    }).filter((elem, pos, arr) => arr.indexOf(elem) === pos).sort(); // remove duplicates
  }

  /**
   * This is where all the data is piped through filters and supplied to the ui
   */
  filterResults() {
    let newArr = angular.copy(this.dataPayLoad);
    // if the filter is activated we use this pipe
    // just to avoid an unecessary amount of calculations
    if (this.filters.rating.activated) {
      newArr = this.filterByRating(newArr);
    }
    // if the user has selected a country then add another pipe
    if (this.filters.country) {
      newArr = this.filterByCountry(this.filters.country, newArr);
    }
    newArr = this.filterByKeyword(newArr);
    this.results = newArr;
  }

  // filters a payload base on a keyword
  filterByKeyword(arr) {
    const keyword = this.filters.keyword;
    let filteredResults = [];
    if (this.filters.keyword && this.filters.keyword.length) {
      filteredResults = arr.filter(item => item.comment.toLowerCase())
        .filter(item => {
          if (item.comment.indexOf(keyword.toLowerCase()) !== -1) {
            return item;
          }
        });
    } else {
      filteredResults = arr;
    }
    return filteredResults;
  }

  // filters a payload based on a rating array
  filterByRating(arr) {
    return arr.filter(item => {
      if (this.filters.rating.payload.indexOf(item.rating) !== -1) {
        return item;
      }
    });
  }

  // filter a set of results by a given country
  filterByCountry(country, arr) {
    return arr.filter(item => item.computed_location.indexOf(country) !== -1);
  }

  handleRatingChange(event, rating) {
    const selectedVal = event.target.value;
    const newArr = this.ratingScale;
    this.filters.rating.payload = utils.getArrayFromObject(this.rating);
    // check if its the same array in order to toggle activated / non activated ?
    this.filters.rating.activated = utils.getArraysDifference(this.filters.rating.payload, this.ratingScale);
    this.filterResults();
  }
}

export const Dashboard = {
  template: require('./dashboard.html'),
  controller: DashboardController
}

