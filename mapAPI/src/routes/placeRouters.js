import express from 'express';
import * as placeController from '../controllers/placeController.js';

const placeRouter = express.Router();

//gets
placeRouter.get("/all", placeController.findAllPlaces)
placeRouter.get("/", placeController.getAllPlaces);
placeRouter.get("/category/:category", placeController.getPlaceByCategory);

//post
placeRouter.post("/", placeController.createPlace);

//put
placeRouter.put("/:id", placeController.updatePlace);

//delete
placeRouter.delete("/:id", placeController.deletePlace);
placeRouter.delete("/category/:category", placeController.deletePlacesByCategory);

export default placeRouter;
