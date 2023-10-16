import React from 'react'
import { useState } from 'react';

function Login({ onLoginComplete, err }) {

    const [datos, setDatos] = useState([
        {
            email: '',
            password: '',
        }
    ]);


    const handleInputChange = (event) => {
        console.log(event.target.value);

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    return (        
        <div className="container">
            <form id="formLogin" onSubmit={(event) => onLoginComplete(datos)}>
                <h4>Login</h4>
                {err && <div className="alert alert-danger" role="alert">
                    Invalid email or password
                </div>}
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                        name="email"
                        onChange={handleInputChange}
                        placeholder='Introduce tu email'
                    />
                    <label className="form-label" htmlFor="form2Example1">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        placeholder='Introduce tu password'
                    />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>

            </form>

        </div>
    );
}

export default Login;
