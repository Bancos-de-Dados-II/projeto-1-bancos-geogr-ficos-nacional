import { findByEmailService, findRoleByEmailService, saveUsersService } from "../service/usersService.js";

const save = async (request, response, next) => {
    const usersData = request.body;

    //o service pode gerar um exceção caso o prima não salve o usuário corretamente
    try {
        const userSaved = await saveUsersService(usersData);
        response.status(201).send(userSaved);
    } catch (error) {
        response.status(400).send({
            erro: error.message
        })
    } finally {
        next()
    }
}

const findByEmail = async (request, response, next) => {
    const {email} = request.query;

    try {
        const userFinded = await findByEmailService(email);
        //devolvendo apenas os campos necessários
        response.status(200).send({
            name: userFinded.name,
            email: userFinded.email,
            password: userFinded.password          
        })
    } catch(error) {
        response.status(404).send({
            error: error.message
        })
    } finally {
        next()
    }
}

const findRoleByEmail = async (request, response, next) => {
    const {email} = request.query;

    //retorna a role do usuário no sistema
    try {
        const userRole = await findRoleByEmailService(email);
        response.status(200).send({
            role: userRole
        })
    } catch (error) {
        response.status(400).send({
            erro: error.message
        })
    } finally {
        next();
    }
}

export { findByEmail, save, findRoleByEmail }