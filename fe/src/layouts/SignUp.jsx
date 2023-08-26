import React from 'react';
import background from "../layouts/img/signin.jpg";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full rounded-md border p-2 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border p-2 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-md border p-2 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <a href="#" className="text-indigo-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
