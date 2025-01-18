import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { Link } from "react-router-dom";

import { validationInputs } from "../../utils/Validation";

function Login() {
    const { register, handleSubmit,onSubmit, formState: { errors } } = useForm();

    //register: identifica os campos do formulário
    //handlesubmit: manipula os diados
   // const onSubmit = (data) => {console.log(data);};

    return (
        <div className="login-body">
        <div className="login-container"><img src="/icons/LOGO-CZ.png" alt="Logo da aplicação" className="login-logo" />
            <div className="login-form-container">

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="login-input"
                            {...register("name", validationInputs.name)}
                        />
                       {/* {errors.name && <p className="error-message">{errors.name.message}</p>}*/}
                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" >Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="login-input"
                            {...register("email", validationInputs.email)}
                        />
                        {/*{errors.email && <p className="error-message">{errors.email.message}</p>}*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input className="login-input"
                            type="password"
                            id="password"
                            name="password"
                
                            {...register("password", validationInputs.password)}
                            
                        />
                         {errors.password && <p className="login-error-message">{errors.password.message}</p>}
                    </div>

                    <div className="login-form-group login-button-group">
                        <button type="submit" className="login-submit-button">
                            Entrar
                        </button>
                    </div>
                </form>
               
            </div>
            <p className="login-count">
            Não tem uma conta? <Link className="login-link-cadastro" to="/cadastro">Crie aqui</Link>
                </p>

        </div>
        </div>
    );
}

export default Login;
