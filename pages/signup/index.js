import React from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import Navbar from "../../components/navbar";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const [error, setError] = useState("");
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    // display form data on success
    try {
      const res = await axios.post("/api/signup", data);
      console.log(res.data);
      if (res.data.error) {
        setError(res.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.signup_container}>
      <Navbar />
      <div className={styles.signup_box}>
        <h1>E-diary</h1>
        <div>{error}</div>
        <form
          className={styles.singup_inputs}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>

          <input
            name="email"
            type="text"
            placeholder="Email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
          <button>Sign Up</button>
          <div>Alreay Have An Account? </div>
          <Link href="/signin">signin</Link>
          <div>Or Login With</div>
          <div className={styles.signup_icons}>
            <FcGoogle size={30} />
            <AiOutlineGithub size={30} />
          </div>
        </form>
      </div>
      <footer>this is a footer</footer>
    </div>
  );
}
export default SignUp;
