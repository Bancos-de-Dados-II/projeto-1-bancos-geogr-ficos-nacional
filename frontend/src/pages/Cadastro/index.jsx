import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { validationInputs } from "../../utils/Validation";
import { Link } from "react-router-dom";

function Cadastro() {
    const { register, handleSubmit,onSubmit, formState: { errors } } = useForm();

  
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
