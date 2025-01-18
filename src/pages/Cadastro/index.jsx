import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { validationInputs } from "../../utils/Validation";

function Cadastro() {
    const { register, handleSubmit,onSubmit, formState: { errors } } = useForm();

  
    return (
        <div className="cadastro-body">
        <div className="cadastro-container">
            <h1 className="cadatro-title">Cadastre-se</h1>
            <div className="cadastro-form-container">

                <form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="cadastro-form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="cadastro-input"
                            {...register("name", validationInputs.name)}
                        />
                       {/* {errors.name && <p className="error-message">{errors.name.message}</p>}*/}
                        
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
            </div>
        </div>
        </div>
    );
}

export default Cadastro;
