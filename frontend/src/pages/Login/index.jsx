import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { Link } from "react-router-dom";

import { validationInputs } from "../../utils/Validation";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //implementação com a api - salvando um novo usuário
    const onSubmit = async (data) => {
        const userEmail = data.email;

        console.log(data);

        console.log(userEmail);

        //buscar senha e validar
        const request = new Request(`http://localhost:5055/users/${userEmail}`);

        const response = await fetch(request);
        const jsonContent = await response.json();

        console.log(jsonContent)
        //se ok, redirecionar e salvar dados no Redis

        //validando senha
        if (jsonContent.password === data.password) {
            //redirecionando
            window.location.href = "/home"
            //salvando no redis
            const request = new Request('http://localhost:5055/redis', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonContent)
            })

            await fetch(request);
        } else {
            alert("Senha incorreta ou usuário não cadastrado!")
        }
    }

    return (
        <div className="login-body">
        <div className="login-container">
            <h1>LOGIN</h1>
            <div className="login-form-container">

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

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
