import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export default  prisma;

//criando e expostando o prisma client para uso nas conexões