const Login = ({ switchToSignup }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <button
          onClick={switchToSignup}
          className="text-indigo-600 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
