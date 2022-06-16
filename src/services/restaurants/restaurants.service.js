import { mocks } from './mock';
import camelize from 'camelize';

const restaurantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

const restaurantTransform = (result) => {
  return camelize(result);
};
restaurantRequest()
  .then(restaurantTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log('error');
  });
