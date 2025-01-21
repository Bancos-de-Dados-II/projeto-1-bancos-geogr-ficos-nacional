
import prisma from '../prismaClient.js';

export const getAllPlaces = async () => {
  return await prisma.place.findMany();
};

export const getPlaceByCategory = async (category) => {
  return await prisma.place.findMany({
    where: { category },
  });
};

export const createPlace = async (name, description, category, coordinates) => {
  return await prisma.place.create({
    data: {
      name,
      description,
      category,
      coordinates,
    },
  });
};

export const updatePlace = async (id, name, description, coordinates, category) => {
  const existingPlace = await prisma.place.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingPlace) {
    throw new Error("Lugar não encontrado");
  }

  return await prisma.place.update({
    where: { id: parseInt(id) },
    data: { name, description, coordinates, category },
  });
};

export const deletePlaceById = async (id) => {
  const existingPlace = await prisma.place.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingPlace) {
    throw new Error("Lugar não encontrado");
  }

  return await prisma.place.delete({
    where: { id: parseInt(id) },
  });
};

export const deletePlacesByCategory = async (category) => {
  return await prisma.place.deleteMany({
    where: { category },
  });
};



