const axios = require('axios');

/**
 * GET - /photos
 * 
 * It returns a paginated array of photos, retrieved from jsonplaceholder.com
 * @param  {number} offset  Offset value to paginate result (Default: 0)
 * @param  {number} limit   Amount of records to return on each request (Default: 10)
 * @return {array[photos]}  An array of photos
 */

exports.get = function (req, res, next) {

  const { offset, limit } = req.query;
  const url = 'https://jsonplaceholder.typicode.com/photos';

  axios.get(url)
    .then((response) => {
      const { data } = response;
      console.log(`data`, data)
      const result = paginate(data, parseInt(offset), parseInt(limit));
      res.send({data: result, totalItems: data.length});
    })
    .catch((error) => next(error));
};


function paginate(data, offset = 0, limit = 10) {
  return data.slice(offset* limit, offset * limit + limit);
}