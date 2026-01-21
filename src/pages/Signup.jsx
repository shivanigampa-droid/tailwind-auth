export default function Signup({ switchToLogin }) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
        Create Account ✨
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Sign up to get started
      </p>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <input
        type="email"
        placeholder="Email address"
        className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition">
        Sign Up
      </button>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-pink-600 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}
