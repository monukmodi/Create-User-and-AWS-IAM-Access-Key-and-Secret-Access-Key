var AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-2' })

var iam = new AWS.IAM({ apiVersion: '2010-05-08' })

var params = {
  UserName: 'monu_kumar',
}

iam.createUser(params, function (err, data) {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('User created successfully:', data.User.UserName)
    // Create access key for the user
    var accessKeyParams = {
      UserName: 'monu_kumar',
    }
    iam.createAccessKey(accessKeyParams, function (err, data) {
      if (err) {
        console.log('Error', err)
      } else {
        console.log('Access key created successfully:', data.AccessKey)
      }
    })
  }
})
