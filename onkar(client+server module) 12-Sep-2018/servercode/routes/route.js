var express = require('express');
var router = express.Router();

const Item = require('../models/buketItemModel.js');


//get method route *****************
router.get('/items', (req, res, next) => {
   Item.find( function(err , items) {
       if(err) {
           res.json(err);
       }
       else {
           res.json(items);
       }
   });
});

//post method route *****************
router.post('/item', (req, res, next) => {
   let newItemSchema = new Item({
    itemName: req.body.itemName ,
    itemType: req.body.itemType ,
    itemPrice: req.body.itemPrice 
   });
   newItemSchema.save(function(err, item) {
       if(err) {
           res.json(err);
       }
       else{ 
            res.json(item);
       }
   });
});


//put method route *****************
router.put('/item/:id', (req, res, next) => {
        Item.findOneAndUpdate({_id: req.params.id }, {
        $set: {
            itemName: req.body.itemName ,
            itemType: req.body.itemType ,
            itemPrice: req.body.itemPrice 
        }, 
    },function(err, item)  {
        if(err) {
            res.json(err);
        }
        else {
            res.send(item);
        }
    });
});


//delete method route **************
router.delete('/item/:id', (req, res, next) => {
    Item.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});




module.exports = router;