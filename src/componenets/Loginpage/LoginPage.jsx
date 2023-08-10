// import React from 'react';
import loginImg from '../../images/signupImg4.jpg';
// import Header from '../Header/Header';


const LoginPage = () => {
    return (

        <div className=''>
            {/* <Header></Header> */}
            <div className='px-24 py-5 lg:px-52 lg:py-44 w-full h-full lg:overflow-y-hidden' style={{
                position: 'relative',
                backgroundColor: '#A5DBDD',
                textAlign: 'center',
            }}>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 h-auto w-full mx-auto my-auto'>
                    {/* <h1>THis is Login page</h1> */}
                    <div className='hidden sm:block sm:mb-1'>
                        <img className='h-full w-full object-cover' src={loginImg} alt="image" />
                    </div>
 

                    <div className="bg-cyan-600 flex flex-col justify-center">
                        <form action="max-w-[400px] w-full  lg:p-24 px-8 rounded-lg">
                            <h2 className='text-4xl dark:text-white font-bold text-center'>Welcome Back</h2>
                            <p>Please Enter your credentials to <span className='font-semibold'>Login</span></p>
                            <div className='flex flex-col text-gray-200 py-1 px-12 lg:px-32'>
                                <label htmlFor="">User Name</label>
                                <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                            </div>
                            <div className='flex flex-col text-gray-200 py-2 px-12 lg:px-32'>
                                <label htmlFor="">Password</label>
                                <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                            </div>
                            <div className='flex justify-between text-gray-200  py-2 px-12 lg:px-32'>
                                <p><input type="checkbox"/>Remember Me</p>
                                <p>Forget password</p>
                            </div>
                            <button className='w-2/5 lg:w-4/6 my-5 py-2 bg-cyan-300 shadow-lg shadow-cyan-400/30 hover:bg-teal-400 text-1xl font-semibold rounded-lg'>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;