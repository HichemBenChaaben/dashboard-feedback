import { getRangeFromNumber } from '../../Utils';

class RatingController {

    /**@ngInject */
    constructor() {
      this.ratingScale = getRangeFromNumber(5);
    }

    handleRatingChange(index, rating) {
      this.onChange({index: index, rating: this.ratingArr});
    }

}

export const Rating = {
  template: require('./Rating.html'),
  controller: RatingController,
  bindings: {
    ratingArr: '=',
    onChange: '&'
  }
}

