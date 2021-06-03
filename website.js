
const fs = require('fs');

var content = null;

module.exports.get = async () =>
  new Promise((resolve, reject) => {
    if (content) {
      resolve(content);
    }
    else {
      fs.readFile(__dirname + '/public/index.html', (err, data) => {
        if (err) {
          reject(err);
        }
        else {
          fs.readFile(__dirname + '/hash', (err, hash) => {
            if (err) {
              reject(err);
            }
            content = data.toString().replace(/\{hash\}/g, hash);
            resolve(content);
          })
        }
      })
    }
  }).then(content => ({
    body: content,
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    }
  }));
