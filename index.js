'use strict'
var LambdaWatermark = require('lambda-watermark')

var options = {
  watermarkImagePath: 'https://realtorimage.s3.us-west-2.amazonaws.com/03f203287157e72b9dadaec59faf83ee',
  relativeSize: 5,
  opacity: 50,
}

exports.handler = function(event, context) {
  new LambdaWatermark(options)(event, context)
}
