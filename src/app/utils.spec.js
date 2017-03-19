import angular from 'angular';
import 'angular-mocks';
import * as utils from './utils';

describe('it should return an array based on an object', () => {
  it('should return an array based on object', () => {
    const a = {
      '1': 'testing',
      '2': 'is',
      '3': 'boring'
    }
    const res = utils.getArrayFromObject(a);
    expect(Array.isArray(res).toBeTruthy);
  });

  it('should sum two numbers...', () => {
    const a = 1;
    const b = 2;
    expect(utils.sum(a, b)).toEqual(3);
  });

  it('should return true when two arrays are equal', () => {
    var a = [1, 2, 3, 4, 5];
    var b = [1, 2, 3];
    var c = utils.getArraysDifference(a, b);
    expect(c).toBeTruthy();
  });

  it('should return false when two arrays are non equal', () => {
    var a = [1, 2, 3, 4, 5];
    var b = [1, 2, 3, 4, 5];
    var c = utils.getArraysDifference(a, b);
    expect(c).toEqual(false);
  });

  it('should return a range from a number', () => {
    const range = 5;
    const resArr = utils.getRangeFromNumber(range);
    expect(resArr).toEqual([1, 2, 3, 4, 5]);
  });
});
