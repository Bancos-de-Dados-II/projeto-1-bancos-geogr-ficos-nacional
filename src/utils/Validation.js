export const validationInputs={

    name: {
        required: "Informe o nome",
      
    },
    email:{
        required: "Informe seu email",
       
    },
    password: {
        required: "Senha é obrigatória",
        minLength: { value: 8, message: "Senha deve ter no mínimo 8 caracteres" }
    }

}

