import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch } from "../redux/hooks";
import {
    continueWithGithub,
    continueWithGoogle,
    loginUser,
} from "../redux/user/userSlice";
import { showErrorMessage, showSuccessMessage } from "../utils/NotifyToast";
import saveUserToDb from "../utils/saveUsertoDb";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    document.title = "Book Finder | Login";

    const from = location.state?.from?.pathname || "/";

    const handleUserLogin = (e: any) => {
        e.preventDefault();

        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;

        if (password.length < 6) {
            showErrorMessage("Password must be at least 6 characters");
        } else {
            dispatch(loginUser({ email, password }))
                .then((res) => {
                    if (res?.type === "user/login/fulfilled") {
                        showSuccessMessage("👍 Email SignIn Successful!");
                        navigate(from, { replace: true });
                    } else if ("error" in res) {
                        showErrorMessage(res?.error?.message as string);
                    }
                })
                .catch((err: any) => {
                    showErrorMessage(err.message);
                });
        }
    };

    const handleGoogleLogin = () => {
        dispatch(continueWithGoogle())
            .then((res) => {
                if ("error" in res) {
                    showErrorMessage(res?.error?.message as string);
                } else if (res?.type === "user/continueWithGoogle/fulfilled") {
                    saveUserToDb(
                        res?.payload?.displayName,
                        res?.payload?.email,
                        res?.payload?.photoURL
                    );
                    showSuccessMessage("👍 Google SignIn Successful!");
                    navigate(from, { replace: true });
                }
            })
            .catch((err) => {
                showErrorMessage(err.message);
            });
    };

    const handleGithubLogin = () => {
        dispatch(continueWithGithub())
            .then((res) => {
                if ("error" in res) {
                    showErrorMessage(res?.error?.message as string);
                } else if (res?.type === "user/continueWithGithub/fullfilled") {
                    saveUserToDb(
                        res?.payload?.displayName,
                        res?.payload?.email,
                        res?.payload?.photoURL
                    );
                    showSuccessMessage("👍 Github SignIn Successfully!");
                    navigate(from, { replace: true });
                }
            })
            .catch((err) => {
                showErrorMessage(err.message);
            });
    };

    // INFO: impliment later
    // const handleFacebookLogin = () => {
    //     dispatch(continueWithFacebook())
    //         .then((res: any) => {
    //             if (res?.type === "user/continueWithFacebook/rejected") {
    //                 showErrorMessage(res?.error?.message);
    //             } else if (
    //                 res?.type === "user/continueWithFacebook/fulfilled"
    //             ) {
    //                 saveUserToDb(
    //                     res?.payload?.displayName,
    //                     res?.payload?.email,
    //                     res?.payload?.photoURL
    //                 );
    //                 showSuccessMessage("👍 Facebook SignIn Successfully!");
    //                 navigate(from, { replace: true });
    //             }
    //         })
    //         .catch((err: any) => {
    //             showErrorMessage(err.message);
    //         });
    // };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#1d232a]  flex flex-col justify-center sm:py-12">
            <div className="p-10 mx-auto md:pt-0 xs:p-0 md:w-full md:max-w-md">
                <h1 className="mb-5 text-3xl font-bold text-center dark:text-white">
                    Please Login
                </h1>
                <div className="bg-white dark:bg-[#2B3A55]   shadow w-full rounded-lg divide-gray-200">
                    <form onSubmit={handleUserLogin} className="px-5 pt-7">
                        <label className="block pb-1 text-sm font-semibold text-gray-600 dark:text-white">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Please Enter Your Email"
                            className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg dark:text-white dark:bg-slate-700"
                            required
                        />
                        <label className="block pb-1 text-sm font-semibold text-gray-600 dark:text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Please Enter Your Password"
                            className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg dark:text-white dark:bg-slate-700"
                            required
                        />
                        {/* {error && (
                            <p className="mb-5 text-sm text-red-700 ">
                                {error}
                            </p>
                        )} */}
                        <button
                            type="submit"
                            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Login</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="inline-block w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                    <div className="p-0 m-0 ">
                        <p className="mt-6 text-sm text-center text-gray-400 dark:text-white">
                            Don&#x27;t have an account yet?{" "}
                            <Link
                                to="/register"
                                className="text-blue-500 focus:outline-none focus:underline hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                    <div className="mt-2 text-center">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-200 border-1 dark:bg-gray-700" />
                            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                                OR Continue With
                            </span>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    Swal.fire({
                                        icon: "info",
                                        title: "Facebook Login Not Implemented Yet!",
                                        text: "I am working on it. Facebook Login will be available soon!",
                                        showConfirmButton: true,
                                        timer: 5000,
                                    });
                                }}
                                type="button"
                                className="transition duration-200 border border-gray-200 dark:text-white text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                            >
                                Facebook
                            </button>
                            <button
                                onClick={handleGoogleLogin}
                                type="button"
                                className="transition duration-200 border border-gray-200 dark:text-white text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                            >
                                Google
                            </button>
                            <button
                                onClick={handleGithubLogin}
                                type="button"
                                className="transition duration-200 border border-gray-200 dark:text-white text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                            >
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="inline-block w-4 h-4 align-text-top"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">
                                        Forgot Password
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <button className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="inline-block w-4 h-4 align-text-top"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                <Link to="/" className="inline-block ml-1">
                                    Back To Home
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
