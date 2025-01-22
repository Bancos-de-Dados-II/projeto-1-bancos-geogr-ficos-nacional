
import { request } from 'express';
import * as placeService from '../services/placeServices.js';


export const getAllPlaces = async (req, res) => {
  try {
    const places = await placeService.getAllPlaces();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPlaceByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const places = await placeService.getPlaceByCategory(category);
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPlace = async (req, res) => {
  try {
    const { name, description, category, coordinates } = req.body;
    const newPlace = await placeService.createPlace(name, description, category, coordinates);
    res.status(201).json({ message: "Lugar criado com sucesso", data: newPlace });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, coordinates, category } = req.body;
    const updatedPlace = await placeService.updatePlace(id, name, description, coordinates, category);
    res.status(200).json({ message: "Lugar atualizado com sucesso", data: updatedPlace });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    await placeService.deletePlaceById(id);
    res.status(200).json({ message: "Lugar excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePlacesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    await placeService.deletePlacesByCategory(category);
    res.status(200).json({ message: "Lugar excluídos com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//retorna todos os locais
export const findAllPlaces = async (request, response, next) => {

  try {
    const allPlaces = await placeService.findAllPlacesService();
    response.status(200).send(allPlaces);

  } catch (error) {
    response.status(400).send({
      erro: error.message
    })
  }
}



