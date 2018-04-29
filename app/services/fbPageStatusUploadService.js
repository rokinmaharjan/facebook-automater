const request = require('request');

const config = require('../../config')

let fbPageStatusUploadService = function uploadStatus(status) {
  request.post(config.fbPageStatusUploadUrl + config.fbPageAccessToken, {
    json: {
      message: status
    }
  }, function (error, response, body) {
    if (error) console.log(error)

    if (!error) {
      console.log("Status code: " + response.statusCode)
      console.log(body)
    }
  })
}
module.exports = fbPageStatusUploadService
