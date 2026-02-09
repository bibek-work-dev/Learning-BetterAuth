import Link from "next/link";

interface RegisterFormProps {
  formData: {
    email: string;
    password: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  onChange,
  onSubmit,
  isLoading,
  error,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 relative overflow-hidden">
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-amber-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] bg-stone-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl shadow-stone-200/50 border border-white/60 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-light text-stone-800 tracking-wide mb-3">
            Create account
          </h1>
          <p className="text-stone-500 text-sm tracking-wide">
            Join us and start your journey
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
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
              name="email"
              value={formData.email}
              onChange={onChange}
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
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="••••••••"
              required
              minLength={8}
              className="w-full px-4 py-3.5 bg-white/50 border-2 border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/80 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold uppercase tracking-wider text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span className="relative z-10">
              {isLoading ? "Creating account..." : "Create Account"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
          <span className="px-4 text-sm text-stone-400 font-medium">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
        </div>

        {/* Footer */}
        <p className="text-center text-stone-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
