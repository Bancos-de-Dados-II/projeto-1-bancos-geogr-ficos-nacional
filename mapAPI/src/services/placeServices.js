
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
    return `Local ${name} inserido no mapa com sucesso`;
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

    if (resulted && resulted.length > 0) {
      // Converter para GeoJSON
      const geoJson = {
        type: 'FeatureCollection',
        features: resulted.map(place => ({
          type: 'Feature',
          properties: { 
            name: place.name, 
            description: place.description, 
            category: place.category,
            coordinates: place.geo
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

//removendo por nome e coordenada
export const removeByNameAndCoordinate = async (name, longitude, latitude) => {

  try {

    const point = `POINT(${longitude} ${latitude})`;

    const deletedPlace = await prisma.$executeRaw`
      DELETE FROM place
      WHERE name = ${name} 
      AND ST_Equals(ST_SetSRID(geo, 4326), ST_GeomFromText(${point}, 4326));
    `;

    if (deletedPlace) {
      return `O local com nome "${name}" e coordenadas (${latitude}, ${longitude}) foi removido.`;

    } else {
      return "Nenhum local encontrado com os critérios fornecidos.";
    }
  } catch (error) {
    console.error("Erro ao remover o local:", error);
  } finally {
    await prisma.$disconnect();
  }

}

export const findByName = async (name) => {
  try {
    const place = await prisma.$queryRaw`
      SELECT 
        name, 
        ST_AsText(geo) AS coordinates
      FROM 
        place
      WHERE 
        name = ${name}
    `;

    if (place.length === 0) {
      return '0';
    }

    console.log(place);

    return place[0];
  } catch (error) {
    console.error('Error fetching place by name:', error.message);
    throw error;
  }
};