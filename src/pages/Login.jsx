export default function Login({ switchToSignup }) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
        Welcome Back 👋
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Login to your account
      </p>

      <input
        type="email"
        placeholder="Email address"
        className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
        Login
      </button>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <button
          onClick={switchToSignup}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
