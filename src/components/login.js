import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from "./ui/Input";  
import Button from "./ui/Button";  
import Alert from "./ui/Alert";  

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    studentId: ''
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`); // Debug line
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const sampleCredentials = {
      email: 'student@example.com',
      password: 'password123',
    };
  
    if (isLogin) {
      if (formData.email === sampleCredentials.email && formData.password === sampleCredentials.password) {
        navigate('/student-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
      } else if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
      } else {
        console.log('Sign-up form data:', formData);
        setIsLogin(true); // Optionally redirect to login page
      }
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 hover:scale-110 transition duration-500">
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full transform translate-x-1/3 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full transform translate-x-1/3 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-40 right-40 w-96 h-96 bg-blue-300 rounded-full transform translate-x-1/3 -translate-y-1/2 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Form */}
          <div className="p-8 relative z-10">
            <div className="mb-12">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`pb-2 mr-4 text-lg font-medium ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button 
                  className={`pb-2 text-lg font-medium ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive" className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
                  {error}
                </Alert>
              )}
              
              {!isLogin && (
                <>
                  <div>
                    <Input 
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="text"
                      name="studentId"
                      placeholder="Student ID"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              )}
              
              <div>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <Input 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 transform hover:scale-105">
                {isLogin ? 'Login' : 'Create Account'}
              </Button>
            </form>
          </div>

          {/* Right side - Student/Teacher illustration */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                {/* Student-themed illustration */}
                <circle cx="200" cy="100" r="30" fill="#6B7280" />
                <circle cx="180" cy="180" r="20" fill="#6B7280" />
                <circle cx="220" cy="180" r="20" fill="#6B7280" />
                <rect x="150" y="200" width="100" height="20" fill="#1E40AF" />
                <rect x="180" y="170" width="10" height="20" fill="#4B5563" />
              </svg>
              
              <div className="absolute bottom-8 text-center w-full">
                <h2 className="text-xl font-semibold text-gray-800">
                  {isLogin ? 'Welcome Back, Student!' : 'Join Our Learning Platform'}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {isLogin ? 'Login to access your dashboard' : 'Create an account to get started'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
