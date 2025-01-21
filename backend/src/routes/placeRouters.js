import express from 'express';
import * as placeController from '../controllers/placeController.js';

const placeRouter = express.Router();

placeRouter.get("/", placeController.getAllPlaces);
placeRouter.get("/category/:category", placeController.getPlaceByCategory);
placeRouter.post("/", placeController.createPlace);
placeRouter.put("/:id", placeController.updatePlace);
placeRouter.delete("/:id", placeController.deletePlace);
placeRouter.delete("/category/:category", placeController.deletePlacesByCategory);

export default placeRouter;
