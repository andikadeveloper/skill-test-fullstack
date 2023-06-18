import React from "react";
import TextInput from "../../../components/TextInput";
import SolidButton from "../../../components/Button/SolidButton";
import TextButton from "../../../components/Button/TextButton";
import { useNavigate } from "react-router";
import useRegister from "./useRegister";

const Register = () => {
    const navigate = useNavigate();

    const {
        status,
        message,
        username,
        password,
        firstName,
        lastName,
        handleRegister,
        handleSetUsername,
        handleSetPassword,
        handleSetFirstName,
        handleSetLastName,
    } = useRegister();

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
                            Sign up your account
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
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="text"
                                placeholder={'Your first name'}
                                title={'First Name'}
                                value={firstName}
                                onInput={handleSetFirstName}
                            />

                            <TextInput
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="text"
                                placeholder={'Your last name'}
                                title={'Last Name'}
                                value={lastName}
                                onInput={handleSetLastName}
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

                            <SolidButton text={'Sign up'} onClick={handleRegister} />
                        </form>

                        <div className="mt-8 flex items-center justify-center">
                            <p className="mr-2 text-center text-sm text-gray-500">
                                Already a member?
                            </p>
                            <TextButton text={'Sign in'} onClick={() => {
                                navigate('/login');
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;