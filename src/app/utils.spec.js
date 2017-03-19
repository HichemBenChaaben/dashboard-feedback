import angular from 'angular';
import 'angular-mocks';
import { getArrayFromObject, getArraysDifference, getRangeFromNumber, sum } from './Utils';

describe('it should return an array based on an object', () => {
  it('should return an array based on object', () => {
    const a = {
      '1': 'testing',
      '2': 'is',
      '3': 'boring'
    }
    const res = getArrayFromObject(a);
    expect(Array.isArray(res).toBeTruthy);
  });

  it('should sum two numbers...', () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toEqual(3);
  });

  it('should return true when two arrays are equal', () => {
    var a = [1, 2, 3, 4, 5];
    var b = [1, 2, 3];
    var c = getArraysDifference(a, b);
    expect(c).toBeTruthy();
  });

  it('should return false when two arrays are non equal', () => {
    var a = [1, 2, 3, 4, 5];
    var b = [1, 2, 3, 4, 5];
    var c = getArraysDifference(a, b);
    expect(c).toEqual(false);
  });

  it('should return a range from a number', () => {
    const range = 5;
    const resArr = getRangeFromNumber(range);
    expect(resArr).toEqual([1, 2, 3, 4, 5]);
  });
});
