import redisClient from "../redis/redisClient.js"

//salvando dados de sessão em memória
const setImMemory = async (data) => {
    const response = await redisClient.set('user-data-section', JSON.stringify(data), 'EX', 3600);

    if (response == "OK") {
        console.log(`user data persist in memory: ${response}`);
    } else {
        throw new Error(`Failed to try save user data in memory with redis`);
    }
}

//buscando dados de sessão
const getDataSectionService = async () => {
    const data = await redisClient.get('user-data-section');

    if (data != null) {
        return data;
    }

    //verificar o quef fazer se o usuário não estiver/estiver logado
    throw new Error("Não foi possível realizar a busca dos dados de sessão")
}

export { setImMemory, getDataSectionService }