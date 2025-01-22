import express from 'express';
import * as placeController from '../controllers/placeController.js';

const placeRouter = express.Router();

//gets
placeRouter.get("/all", placeController.findAllPlaces)
placeRouter.get("/", placeController.getAllPlaces);
placeRouter.get("/category/:category", placeController.getPlaceByCategory);
placeRouter.get("/:name", placeController.getByName);

//post
placeRouter.post("/", placeController.createPlace);

//put
placeRouter.put("/:id", placeController.updatePlace);

//delete
placeRouter.delete("/:id", placeController.deletePlace);
placeRouter.delete("/:name/:coordinates", placeController.removeByNameAndCategorie)
placeRouter.delete("/category/:category", placeController.deletePlacesByCategory);

export default placeRouter;
