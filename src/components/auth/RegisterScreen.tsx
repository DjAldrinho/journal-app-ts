import React from "react";
import {Link} from "react-router-dom";

function RegisterScreen() {

    const handleLogin = () => {
        // history.replace("/dashboard");
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
                    xl:text-bold">Register</h2>
                    <div className="mt-4 py-4">
                        <form>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Full name</div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="text" placeholder="Mike Tower" name="name"/>
                            </div>
                            <div className="mt-8">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="email" placeholder="mike@gmail.com"/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="password" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </div>
                                </div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="password" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-8">
                                <button className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                                shadow-lg" onClick={handleLogin}>
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                            Have an account ? <Link className="cursor-pointer text-red-600 hover:text-red-800"
                                                    to="/auth/login">
                            Log in
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;
