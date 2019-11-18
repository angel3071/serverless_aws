const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {

  const params = {
    TableName: "employees",
    Key: {
      Id: "1"
    }
  };

  const employee = await dynamoDb.get(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(employee)
  };
  return response;
};
