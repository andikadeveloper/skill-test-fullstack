import React from "react";
import useLogin from "./useLogin";
import TextInput from "../../../components/TextInput";
import SolidButton from "../../../components/Button/SolidButton";
import TextButton from "../../../components/Button/TextButton";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const {
        status,
        message,
        username,
        password,
        handleLogin,
        handleSetUsername,
        handleSetPassword
    } = useLogin();

    return (
        <>
            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <TextInput
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="text"
                                placeholder={'Your username'}
                                title={'Username'}
                                value={username}
                                onInput={handleSetUsername}
                            />

                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                placeholder={'Your password'}
                                title={'Password'}
                                autoComplete="current-password"
                                value={password}
                                onInput={handleSetPassword}
                            />

                            <SolidButton text={'Sign in'} onClick={handleLogin} />
                        </form>

                        <div className="mt-8 flex items-center justify-center">
                            <p className="mr-2 text-center text-sm text-gray-500">
                                Not a member?
                            </p>
                            <TextButton text={'Create an account'} onClick={() => {
                                navigate('/register');
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;