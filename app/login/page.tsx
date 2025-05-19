'use client';

import { useAuth } from '../context/authContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define keyframes for animations
const style = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInError {
    from { opacity: 0; height: 0; }
    to { opacity: 1; height: 1.25rem; }
  }
`;

const LoginPage = () => {
  const { login, username, name, password, setUsername, setName, setPassword, isAuthenticated } = useAuth();
  const router = useRouter();

  const [errors, setErrors] = useState<{ name?: string; username?: string; password?: string }>({});

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/private');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setName(parsedUser.name ?? '');
        setUsername(parsedUser.username ?? '');
        setPassword(parsedUser.password ?? '');
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error);
        localStorage.removeItem('user');
      }
    }
    console.log('Stored user data:', storedUser);
  }, [setName, setUsername, setPassword]);

  const validateForm = () => {
    const newErrors: { name?: string; username?: string; password?: string } = {};

    if (!name) {
      newErrors.name = 'Name is a mandatory field';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!username) {
      newErrors.username = 'Email is a mandatory field';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      newErrors.username = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is a mandatory field';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: 'name' | 'username' | 'password', value: string) => {
    const newErrors = { ...errors };

    if (field === 'name') {
      setName(value);
      if (!value) {
        newErrors.name = 'Name is a mandatory field';
      } else if (value.length < 2) {
        newErrors.name = 'Name must be at least 2 characters long';
      } else {
        delete newErrors.name;
      }
    } else if (field === 'username') {
      setUsername(value);
      if (!value) {
        newErrors.username = 'Email is a mandatory field';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.username = 'Please enter a valid email address';
      } else {
        delete newErrors.username;
      }
    } else if (field === 'password') {
      setPassword(value);
      if (!value) {
        newErrors.password = 'Password is a mandatory field';
      } else if (value.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Login button clicked');
      const userData = { name, username, password };
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User data saved to localStorage:', userData);
      login();
      router.push('/private');
    } else {
      console.log('Validation failed, please check the form');
    }
  };

  const isFormValid = () => {
    return !errors.name && !errors.username && !errors.password && name && username && password;
  };

  return (
    <div className="flex min-h-screen">
      {/* Inject keyframes into the document */}
      <style>{style}</style>

      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
        <div className="max-w-md w-full mx-auto animate-[fadeIn_0.5s_ease-out]">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Login</h1>
          <p className="text-gray-600 mb-8">Login to your account.</p>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-black placeholder-gray-400 shadow-sm ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 hover:border-blue-400'}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 animate-[fadeInError_0.3s_ease-out]">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">E-mail Address</label>
            <input
              id="email"
              type="text"
              placeholder="Enter Email Address"
              value={username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-black placeholder-gray-400 shadow-sm ${errors.username ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 hover:border-blue-400'}`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1 animate-[fadeInError_0.3s_ease-out]">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-black placeholder-gray-400 shadow-sm ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 hover:border-blue-400'}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 animate-[fadeInError_0.3s_ease-out]">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-blue-600" />
              <span className="text-gray-600 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline text-sm">Reset Password?</a>
          </div>

          <button
            onClick={handleLogin}
            disabled={!isFormValid()}
            className={`w-full p-3 rounded-lg text-white transition-all duration-300 transform ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Sign In
          </button>

          <p className="text-gray-600 mt-4 text-center text-sm">
            Don’t have an account yet?{' '}
            <a href="#" className="text-blue-600 hover:underline">Join KRIS today.</a>
          </p>
        </div>
      </div>

      {/* Right Section - Image and Text */}
      <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center p-12 relative">
        <div className="absolute inset-0 bg-[url('/path-to-image.jpg')] bg-cover bg-center opacity-50"></div>
        <h2 className="text-4xl font-bold relative z-10">
          Manage all HR Operations from the comfort of your home.
        </h2>
        <div className="flex mt-8 relative z-10">
          <div className="w-8 h-2 bg-yellow-400 mr-2 rounded"></div>
          <div className="w-8 h-2 bg-white mr-2 rounded"></div>
          <div className="w-8 h-2 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;