const ItemData = require("../data/itemData").ItemData;
const StatsManager = require("../business/statsManager").StatsManager;
const LevelManager = require("../business/levelManager").LevelManager;
const PropertiesManager = require("../business/propertiesManager").PropertiesManager;

const ItemManager = function () { };

ItemManager.prototype.addNewItem = async function (params) {
  try {

    let itemData = new ItemData();
    let result = await itemData.addNewItem(params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: "New Item Created"
      };
    } else {
      result = {
        success: "false",
        message: "Could not save Item"
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

ItemManager.prototype.update = async function (id, params) {
  try {

    let itemData = new ItemData();
    let result = await itemData.update(id, params);
    if (result != null) {
      result = {
        success: "true",
        result: result,
      };
    } else {
      result = {
        success: "false",
        message: "Could not update"
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

ItemManager.prototype.getItemsByCollectionId = async function (userId, collectionId) {
  try {

    let itemData = new ItemData();
    let result = await itemData.getItemsByCollectionId(userId, collectionId);
    console.log("Result: ", result);
    if (result != null) {
      result = {
        success: "true",
        result: result,
        message: ""
      };
    } else {
      result = {
        success: "false",
        message: "Could not find any item for this collection"
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

ItemManager.prototype.getUnMintedItems = async function () {
  try {

    let itemData = new ItemData();
    let statsManager = new StatsManager();
    let levelManager = new LevelManager();
    let propertiesManager = new PropertiesManager();

    let result = await itemData.getUnMintedItems();
    if (result != null) {
      for (let i = 0; i < result.length; i++) {
        let statsResult = await statsManager.getStatsByItemId(result[i].ItemId);
        if (statsResult != null && statsResult.success && statsResult.result.length > 0) {
          result[i].Stats = statsResult.result;
        }

        let levelResult = await levelManager.getLevelByItemId(result[i].ItemId);
        if (levelResult != null && levelResult.success && levelResult.result.length > 0) {
          result[i].Levels = levelResult.result;
        }

        let propertiesResult = await propertiesManager.getPropertiesByItemId(result[i].ItemId);
        if (propertiesResult != null && propertiesResult.success && propertiesResult.result.length > 0) {
          result[i].Properties = propertiesResult.result;
        }
      }
    } else {
      result = {
        success: "false",
        message: "Could not find any item for this collection"
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

exports.ItemManager = ItemManager;
