import React from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/Login.css";
import logo from "../assets/icons/LOGO-CZ.png";

function Login() {
    const { register, handleSubmit } = useForm(); 

    //register: identifica os campos do formulário
    //handlesubmit: manipula os diados
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container"><img src={logo} alt="Logo da aplicação" className="logo" />
            <div className="form-container">

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            {...register("name")}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            {...register("email")}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            {...register("password")}
                        />
                    </div>

                    <div className="form-group button-group">
                        <button type="submit" className="submit-button">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
