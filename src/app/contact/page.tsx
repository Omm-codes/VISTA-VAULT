"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({ submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-montserrat text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-black text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 font-montserrat">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 font-montserrat">Email</h3>
                <p className="font-poppins text-gray-300">omsanjay975@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 font-montserrat">Location</h3>
                <p className="font-poppins text-gray-300">SIGCE Ghansoli<br/>Navi Mumbai, 400701</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 font-montserrat">Hours</h3>
                <p className="font-poppins text-gray-300">Monday - Friday: 9am - 5pm<br/>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            {submitStatus.submitted ? (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2 font-montserrat">Message Sent!</h3>
                <p className="text-gray-600 font-poppins">Thank you for contacting us. We'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitStatus({ submitted: false, error: false })}
                  className="mt-6 bg-black text-white px-6 py-2 rounded-md font-poppins hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium font-poppins">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md font-poppins focus:border-black focus:outline-none"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium font-poppins">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md font-poppins focus:border-black focus:outline-none"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium font-poppins">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md font-poppins focus:border-black focus:outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium font-poppins">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md font-poppins focus:border-black focus:outline-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white p-3 rounded-md font-poppins hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}