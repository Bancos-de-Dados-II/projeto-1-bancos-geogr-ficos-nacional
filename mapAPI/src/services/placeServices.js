
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
  //dividir coordenadas
  const coordinatesIndiviadl = {
    longitude: parseFloat(coordinates.split(',')[0]),
    latitute: parseFloat(coordinates.split(',')[1].trim())
  }

  console.log(coordinatesIndiviadl);

  //criar local com query pura para respeitar o tipo geometry (sem suporte com o Prisma)
  const resulted = await prisma.$executeRaw`
    INSERT INTO place (name, description, category, geo)
    VALUES (
      ${name}, 
      ${description}, 
      ${category}, 
      ST_SetSRID(ST_MakePoint(${coordinatesIndiviadl.latitute}, ${coordinatesIndiviadl.longitude}), 4326))
  `

  if (resulted != null) {
    return resulted;
  }

  throw new Error("Falha ao salvar local");

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

//retorna todos os locais
export const findAllPlacesService = async () => {
  try {
    // Selecionando os atributos que quero
    const resulted = await prisma.$queryRaw`
      SELECT 
        name, 
        description, 
        category, 
        ST_AsGeoJSON(geo) AS geo 
      FROM place;
    `;

    console.log(resulted);

    if (resulted && resulted.length > 0) {
      // Converter para GeoJSON
      const geoJson = {
        type: 'FeatureCollection',
        features: resulted.map(place => ({
          type: 'Feature',
          properties: { 
            name: place.name, 
            description: place.description, 
            category: place.category 
          },
          geometry: JSON.parse(place.geo.toString('utf8')), // Certifique-se que é JSON válido
        })),
      };

      return geoJson;
    }

  } catch (error) {
    throw new Error("Erro ao buscar todos os locais no banco.");
  }
};