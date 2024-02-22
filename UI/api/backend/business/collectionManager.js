const CollectionData = require("../data/collectionData").CollectionData;

const CollectionManager = function () { };

CollectionManager.prototype.addNewCollection = async function (params) {
  try {

    let collectionData = new CollectionData();
    let result = await collectionData.addNewCollection(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "New Collection Created"
      };
    } else {
      result = {
        success: "false",
        message: "Could not save collection"
      };
    }

    return result;
  } catch (error) {
    console.log("Error: ", error);
    return (result = {
      success: "false",
      message: error.message
    });
  }
};

CollectionManager.prototype.getCollectionsByUserId = async function (id) {
  try {

    let collectionData = new CollectionData();
    let result = await collectionData.getCollectionsByUserId(id);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "New Collection Created"
      };
    } else {
      result = {
        success: "false",
        message: "Could not save collection"
      };
    }

    return result;
  } catch (error) {
    console.log("Error: ", error);
    return (result = {
      success: "false",
      message: error.message
    });
  }
};

exports.CollectionManager = CollectionManager;
