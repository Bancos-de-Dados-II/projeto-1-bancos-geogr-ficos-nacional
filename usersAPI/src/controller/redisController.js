import { request, response } from "express";
import { getDataSectionService, setImMemory, deleteDataSectionService } from "../service/redisService.js";

//salvando dados
const setDataSection = async (request, response, next) => {

    try {

        const dataResponse = await setImMemory(request.body);
        response.status(201).send(dataResponse)
    } catch (error) {

        response.status(400).send({
            erro: error.message
        })
    }
}

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

//removendo os dados de sessão
const removeDataSection = async (request, response, next) => {

    try {
        const remove = await deleteDataSectionService();
        response.status(200).send({
            deleted: remove
        })
    } catch (error) {
        response.status(400).send({
            erro: error.message
        })
    }
}

export { getDataSection, setDataSection, removeDataSection }