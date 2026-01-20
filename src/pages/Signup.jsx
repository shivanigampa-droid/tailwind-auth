const Signup = ({ switchToLogin }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-green-600 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
