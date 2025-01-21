import prismaClient from "../prisma/client.js"
import { setImMemory } from "./redisService.js";

const saveUsersService = async (userData) => {
    //considera que não são nulos
    const userSaved = await prismaClient.user.create({
        data: userData
    })

    if (userData != null) {
        return userSaved;
    }

    throw new Error("Ocorreu um erro ao savar o usuário, tente novamente");
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
        //dados do usuário salvos em sessão
        setImMemory(userFinded);

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