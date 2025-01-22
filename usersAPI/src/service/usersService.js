import prismaClient from "../prisma/client.js"
import { setImMemory } from "./redisService.js";

const checkIsUserExist = async (userEmail) => {
    const user = await prismaClient.user.findFirst({
        where: {
            email: userEmail
        }
    })

    return user != null;
}

const saveUsersService = async (userData) => {
    //considera que não são nulos
    if (!checkIsUserExist(userData.email)) {
        //erro de conflito
        throw new Error("409")
    }

    const userSaved = await prismaClient.user.create({
        data: userData
    })

    if (userData != null) {
        return userSaved;
    }

    throw new Error("400");
}

//considerá que essa rota será usada exclusivamente para o login
const findByEmailService = async (emailToFind) => {
    const userFinded = await prismaClient.user.findFirst({
        where: {
            email: emailToFind
        }
    })

    //setar dados de sessão no redis
    if (userFinded != null) {
        return userFinded;
    }

    throw new Error(`O usuário com o email ${emailToFind} não foi encontrado`)
}

const findRoleByEmailService = async (email) => {
    //se nulo, a exceção será gerada e pelo serviço de busca e tratada no middlewere
    const userWithEmail = await findByEmailService(email);

    return userWithEmail.role;
}

export { saveUsersService, findByEmailService, findRoleByEmailService }