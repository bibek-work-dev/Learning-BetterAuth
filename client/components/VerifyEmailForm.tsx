import React from "react";

const VerifyEmailForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-amber-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] bg-stone-200/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl shadow-stone-200/50 border border-white/60 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-light text-stone-800 tracking-wide mb-3">
            Verify email
          </h1>
          <p className="text-stone-500 text-sm tracking-wide leading-relaxed">
            We've sent a 6-digit code to your email.
            <br />
            Enter it below to continue.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* OTP Inputs */}
          <div className="flex gap-3 justify-center">
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
            <input
              type="text"
              maxLength={1}
              className="w-14 h-16 text-center text-2xl font-semibold bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 focus:scale-105 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold uppercase tracking-wider text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Verify Email</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>

        {/* Resend Section */}
        <div className="text-center mt-8">
          <p className="text-stone-500 text-sm mb-2">
            Didn't receive the code?
          </p>
          <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm underline underline-offset-2 transition-colors duration-200">
            Resend code
          </button>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-8">
          <a
            href="/login"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors duration-200 font-medium text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
