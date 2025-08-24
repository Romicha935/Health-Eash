import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err.message
      });
    }
  };

   const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Google Login Successful',
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err.message
      });
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>

      <hr className="my-4" />

      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
      >
        Sign in with Google
      </button>

      {/* Create Account Link */}
      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
