"use client";

import LoginForm from "@/components/LoginForm";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = await signIn.email({
        email,
        password,
      });
      console.log("data in signIn", data);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      isLoading={isLoading}
      error={error}
      handleSubmit={handleSubmit}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleGoogleSignIn={handleGoogleSignIn}
    />
  );
};

export default page;
