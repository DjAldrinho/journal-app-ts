import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {Link} from "react-router-dom";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import IUser from "../../interfaces/IUser";
import {loginWithEmailAndPassword, loginWithGoogle} from "../../actions/auth";

function LoginScreen() {

    const dispatch = useDispatch();
    const {loading, msgError} = useSelector((state: RootStateOrAny) => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const {email, password}: IUser = formValues;

    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(loginWithEmailAndPassword(email, password));
    }

    const handleLoginGoogle = () => {
        dispatch(loginWithGoogle());
    }

    return (
        <div className="flex items-center justify-center mx-auto h-screen">
            <div className="w-2/4 xl:max-w-screen-sm bg-white rounded-b-lg">
                <div className="py-12 bg-blue-500 shadow-md flex justify-center lg:justify-start lg:px-12">
                    <div className="cursor-pointer flex items-center">
                        <div className="text-2xl text-white  tracking-wide font-semibold">Journal APP</div>
                    </div>
                </div>
                <div className="mt-10 px-8">
                    <h2 className="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                    <div className="py-2">
                        {
                            msgError &&
                            (
                                <div className="py-4 text-red-500">
                                    * {msgError}
                                </div>
                            )
                        }
                        <form onSubmit={handleLogin}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input autoComplete="off"
                                       className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                       type="email" placeholder="mike@gmail.com" value={email} name="email"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <div className="text-xs font-display font-semibold text-red-600 hover:text-red-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="password" placeholder="Enter your password" value={password}
                                    name="password"
                                    onChange={handleInputChange}/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                                shadow-lg" type="submit" disabled={loading}>
                                    Log In
                                </button>
                                <button className="bg-red-800 text-gray-100 p-4 w-full rounded-full tracking-wide mt-3
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-900
                                shadow-lg" onClick={handleLoginGoogle} type="button">
                                    <FontAwesomeIcon icon={fab.faGoogle} className="rounded"/> Sign in with Google
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account? <Link className="cursor-pointer text-red-600 hover:text-red-800"
                                                         to="/auth/register">
                            Sign up
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
