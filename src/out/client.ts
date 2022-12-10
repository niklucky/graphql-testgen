const { default: axios } = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function (data, url = null) {
  return axios({
    url: url ?? process.env.TARGET_GRAPHQL_URL,
    method: 'post',
    data,
  });
};
