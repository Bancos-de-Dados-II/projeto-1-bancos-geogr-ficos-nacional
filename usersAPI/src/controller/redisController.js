import { getDataSectionService } from "../service/redisService.js";

const getDataSection = async (request, response, next) => {

    //endpoint de busca de dados
    try {
        const dataSection = await getDataSectionService();
        response.status(200).send(dataSection);
    } catch (error) {
        response.status(404).send({
            erro: `usuário não logado: ${error.message}`
        })
    }
}

export { getDataSection }