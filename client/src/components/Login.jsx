import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
    const [state, setState] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { backendUrl, setShowLogin, setToken, setUser } = useContext(AppContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (state === "Login") {
                response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
            } else {
                response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
            }

            const { data } = response;
            console.log("API Response:", data);

            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem("token", data.token);
                setShowLogin(false);
                toast.success(`Welcome ${data.user.name}!`);
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Login/Register Error:", error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    useEffect(() => {
        console.log("Login component mounted, showLogin state:", setShowLogin);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center">
            <motion.form
                onSubmit={onSubmitHandler}
                className="relative bg-white p-10 rounded-xl text-slate-500 w-96 shadow-lg"
                initial={{ opacity: 0.2, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
                <p className="text-sm text-center mb-4">Welcome! Please {state.toLowerCase()} to continue.</p>

                {state !== "Login" && (
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.user} alt="User" />
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="outline-none text-sm w-full"
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                )}

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon} alt="Email" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="outline-none text-sm w-full"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon} alt="Password" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="outline-none text-sm w-full"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <p className="text-sm text-blue-600 my-4 cursor-pointer text-center">Forgot password?</p>

                <button className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 transition">
                    {state === "Login" ? "Login" : "Create Account"}
                </button>

                <p className="mt-5 text-center">
                    {state === "Login" ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setState(state === "Login" ? "Sign Up" : "Login")} className="text-blue-600 cursor-pointer font-medium">
                        {state === "Login" ? "Sign up" : "Login"}
                    </span>
                </p>

                <img onClick={() => setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer w-6 h-6" src={assets.cross_icon} alt="Close" />
            </motion.form>
        </div>
    );
};

export default Login;
