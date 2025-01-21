import Redis from "ioredis";

const redisClient = new Redis();

//monitorando erros
redisClient.on('error', (error) => {
    console.log(`Erro ao conectar com o redis: ${error.message}`);
})

export default redisClient;