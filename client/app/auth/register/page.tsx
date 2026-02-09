"use client";

import RegisterForm from "@/components/RegisterForm";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = await signUp.email({
        name: "Anonymous",
        email: formData.email,
        password: formData.password,
      });
      console.log("data in register", data);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default page;
