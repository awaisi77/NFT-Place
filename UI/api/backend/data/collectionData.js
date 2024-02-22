const Connection = require("./dbConnection").Connection;
const {
  v1: uuidv1
} = require('uuid');

const CollectionData = function () { };

CollectionData.prototype.addNewCollection = async function (params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  return sequelize
    .authenticate()
    .then(() => {

      return model
        .create({
          CollectionId: uuidv1(),
          UserId: params.UserId,
          CollectionName: params.CollectionName,
          Description: params.Description,
          Logo: params.Logo
        })
        .then(function (result) {
          sequelize.connectionManager.close().then(() => {

          });
          return result;
        })
        .catch(error => {
          sequelize.connectionManager.close().then(() => {
          });

          throw error;
        });
    })
    .catch(error => {
      sequelize.connectionManager.close().then(() => {
      });

      throw error;
    });
};

//get user by ID
CollectionData.prototype.getCollectionsByUserId = async function (id) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/collection.js");

  return sequelize.authenticate().then(() => {
    return model
      .findAll({
        where: {
          UserId: id
        },
        raw: true
      })
      .then(function (result) {
        sequelize.connectionManager.close();
        if (result != null && result.length > 0) {
          return {
            user: result,
            message: ""
          };
        } else {
          return {
            user: null,
            message: "No collection found for this user"
          };
        }
      });
  });
};

//update AttributeGroup
CollectionData.prototype.update = async function (id, params) {
  let connection = new Connection();
  let sequelize = connection.getSequelize();
  let model = sequelize.import("../../models/users.js");

  let values = {};
  Object.keys(params).forEach(function (key) {
    values[key] = params[key];
  });

  console.log('Values: ', values);

  return sequelize
    .authenticate()
    .then(() => {
      return model
        .update(values, {
          where: {
            UserId: id
          }
        })
        .catch(error => {
          sequelize.connectionManager.close();

          throw error;
        });
    })
    .catch(error => {
      sequelize.connectionManager.close();

      throw error;
    });
};

exports.CollectionData = CollectionData;
