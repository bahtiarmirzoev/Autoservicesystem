import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our application! We are dedicated to providing the best
          service and experience for our users. Our team is passionate about
          creating innovative solutions that make a difference in your daily
          life.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to create user-friendly and efficient applications that
          help you achieve your goals. We believe in continuous improvement and
          strive to enhance our products to meet the ever-evolving needs of our
          users.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-gray-700 mb-4">
          Our team is comprised of talented and dedicated professionals with
          diverse backgrounds in technology, design, and business. We work
          collaboratively to bring our vision to life and deliver exceptional
          products to our users.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions, feedback, or suggestions, please do not
          hesitate to reach out to us. We are always here to help and would love
          to hear from you!
        </p>
        <div className="flex justify-end">
          <a
            href="/contact"
            className="text-indigo-600 hover:text-indigo-900 font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
