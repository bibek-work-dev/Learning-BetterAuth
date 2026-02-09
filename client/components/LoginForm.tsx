import Link from "next/link";

interface LoginFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGoogleSignIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  isLoading,
  error,
  handleSubmit,
  handleChangeEmail,
  handleChangePassword,
  handleGoogleSignIn,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 relative overflow-hidden">
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-amber-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] bg-stone-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl shadow-stone-200/50 border border-white/60 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-light text-stone-800 tracking-wide mb-3">
            Welcome back
          </h1>
          <p className="text-stone-500 text-sm tracking-wide">
            Sign in to continue your journey
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3.5 bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3.5 bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
            />
          </div>

          <div className="text-right -mt-2">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold uppercase tracking-wider text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span className="relative z-10">
              {isLoading ? "Signing in..." : "Sign In"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
          <span className="px-4 text-sm text-stone-400 font-medium">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white border-2 border-stone-200 text-stone-700 py-4 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md hover:bg-stone-50 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-stone-500 text-sm mt-8">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
