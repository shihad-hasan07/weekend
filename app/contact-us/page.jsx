'use client';

import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSend = () => {
    setStatus('Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-center text-teal-500 font-bold text-xs tracking-widest mb-8">
          CONTACT US
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Form */}
          <div className="bg-white">
            <h3 className="text-lg font-semibold mb-6">Leave us a message</h3>
            
            <div className="space-y-4">
              {/* Name Input */}
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="First_Name Last_Name"
                required
                className="w-full px-3 py-2.5 border border-gray-300 text-sm focus:outline-none focus:border-teal-500"
              />

              {/* Email Input */}
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-3 py-2.5 border border-gray-300 text-sm focus:outline-none focus:border-teal-500"
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-3 py-2.5 border border-gray-300 text-sm resize-none focus:outline-none focus:border-teal-500"
              ></textarea>

              {/* Send Button */}
              <button
                onClick={handleSend}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 transition-colors text-sm"
              >
                Send
              </button>

              {/* Status Message */}
              {status && (
                <p className={`text-sm text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Info & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Wesend Ltd</h3>
            
            {/* Address */}
            <p className="text-gray-700 text-xs leading-relaxed mb-2">
              B-270 Ground Floor Double<br />
              Storey, Near Raja Garden<br />
            Rampura, Dhaka
            </p>

            {/* Phone */}
            <p className="text-gray-700 text-xs mb-1.5">
              +91 9958272734
            </p>

            {/* Email */}
            <p className="text-gray-700 text-xs mb-3">
              hello@nfc.com.sg
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mb-4">
              <a href="#" className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <FaEnvelope className="text-gray-600 text-xs" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <FaInstagram className="text-gray-600 text-xs" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <FaFacebookF className="text-gray-600 text-xs" />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <FaTwitter className="text-gray-600 text-xs" />
              </a>
            </div>

            {/* Google Map */}
            <div className="w-full h-48 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930101785!2d90.25446485!3d23.780753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rampura, Bangladesh Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}