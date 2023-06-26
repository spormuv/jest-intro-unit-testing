const axios = require('axios');

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error('no data'));
        }
      }, 200);
    });
  }

  static async get() {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Ajax;
