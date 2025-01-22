import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { validationInputs } from "../../utils/Validation";
import { Link } from "react-router-dom";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //criando novo usuário:
    const onSubmit = async (data) => {
        //considerando a pré-validação dos dados polo react form

        //preparando requisição para a API
        const request = new Request("http://localhost:5055/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const response = await fetch(request);
        
        if (response.status === 201) {
            //ações depois de criado: redirecionar para login, 'informar do sucesso na criação'

            //redirecionando para login
            window.location.href = '/';
        } else {
            //ações se surgir um erro na criação da conta
            //informar erro
        }
    }
  
    return (
        <div className="cadastro-body">
        <div className="cadastro-container">
        <div className="login-container">
            <img src="/icons/LOGO-CZ.png" alt="Logo da aplicação" className="login-logo" /> 
        </div>       
            <div className="cadastro-form-container">

                <form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="cadastro-form-group">
                        <label className="MsgCadastro">Crie um novo Email e Senha</label>
                    </div>

                    <div className="cadastro-form-group">
                        <label htmlFor="email" >Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="cadastro-input"
                            {...register("email", validationInputs.email)}
                        />
                        {/*{errors.email && <p className="error-message">{errors.email.message}</p>}*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input className="cadastro-input"
                            type="password"
                            id="password"
                            name="password"
                
                            {...register("password", validationInputs.password)}
                            
                        />
                         {errors.password && <p className="cadastro-error-message">{errors.password.message}</p>}
                    </div>

                    <div className="cadastro-form-group cadastro-button-group">
                        <button type="submit" className="cadastro-submit-button">
                            Cadastrar
                        </button>
                    </div>
                </form>
                <p className="Cadastro-count">
                Já possui uma conta? <Link className="cadastro-link-login" to="/login">Faça login</Link>
            </p>
            </div>
        </div>
        </div>
    );
}

export default Cadastro;
