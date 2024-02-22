const express = require("express");
const ItemManager = require("../../backend/business/itemManager").ItemManager;
var path = require('path');
const router = express.Router();

router.get("/item/testRoute", async function (req, res, next) {
  let result = null;
  globalVar = globalVar + 1
  res.send(true)
});

router.post("/item/addNewItem", async function (req, res, next) {
  let result = null;
  try {
    let itemManager = new ItemManager();
    result = itemManager.addNewItem(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/item/getItemsByCollection", async function (req, res, next) {
  let result = null;
  try {

    let itemManager = new ItemManager();
    result = await itemManager.getItemsByCollectionId(req.query.UserId, req.query.CollectionId);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/item/unMintedItems", async function (req, res, next) {
  let result = null;
  try {

    let itemManager = new ItemManager();
    result = await itemManager.getUnMintedItems();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/item/addTokenAddress", async function (req, res, next) {
  let result = null;
  try {

    let itemManager = new ItemManager();
    result = await itemManager.update(req.body.ItemId, { Address: req.body.Address });
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
