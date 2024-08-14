const express=require('express');
const router=express.Router();
const ItemsController=require('../controller/controller');
router.get('/Items',ItemsController.getAllItems);
router.get('/Items/:id',ItemsController.getItemsById);
router.post('/Items',ItemsController.createItem);
router.put('/Items/:id',ItemsController.updateItem);
router.delete('/Items/:id',ItemsController.deleteItem);
router.post('/Gigs',ItemsController.createGig);
router.get('/Gigs',ItemsController.getGigs);
router.post('/Posts',ItemsController.createPosts);
router.get('/Posts',ItemsController.getPosts);
router.put('/Posts/:emai',ItemsController.UpdatePosts);

module.exports=router;