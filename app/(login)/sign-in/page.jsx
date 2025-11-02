'use client'
import React, { useContext, useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';

const SignInPage = () => {
  const {googlelogin,githubLogin,login}=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    login(email, password)
        .then(res=>{
          e.target.reset();
        })
        .catch(err=>{
        })

  };

  const handleGoogleLogin = () => {
    googlelogin()
      .then(res => {
        console.log('google log in user', res);
      })
      .catch(error => {
        console.log('error happend');
      })
  }

  const handleGithubLogin = () => {
    githubLogin()
      .then(res => {
        console.log('google log in user', res);
      })
      .catch(error => {
        console.log('error happend');
      })

  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #e8f5f1 0%, #f0fdf9 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#20b486' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#20b486' }}></div>
      </div>

      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg" style={{ backgroundColor: '#20b486' }}>
              <span className="text-3xl">🎓</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>

            {/* email address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input required type="email" name="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-3 border rounded-xl  transition-all" style={{ focusRing: '2px solid #20b486' }} />
              </div>
            </div>

            {/* passoword */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type='password' name="password" placeholder="Enter your password" className="w-full pl-12 pr-12 py-3 border rounded-xl transition-all" style={{ focusRing: '2px solid #20b486' }} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" style={{ accentColor: '#20b486' }} />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button className="text-sm font-semibold hover:underline" style={{ color: '#20b486' }}> Forgot Password? </button>
            </div>

            <button type='submit' className=" cursor-pointer w-full py-3 px-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: '#20b486' }}>
              Sign In </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button onClick={handleGoogleLogin} className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-medium text-gray-700"><svg className="w-5 h-5" viewBox="0 0 24 24"> <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /> <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /> <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /> </svg>
              Google
            </button>
            <button onClick={handleGithubLogin} className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-medium text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{' '}
            <Link href='sign-up'>
              <button className="cursor-pointer font-semibold hover:underline" style={{ color: '#20b486' }}>
                Sign Up
              </button>
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          By signing in, you agree to our{' '}
          <button className="underline hover:text-gray-700">Terms of Service</button>
          {' '}and{' '}
          <button className="underline hover:text-gray-700">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;