import React from "react";
import { Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            About KinaTechBrainz
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-indigo-200 sm:text-2xl md:mt-5 md:max-w-3xl">
            Empowering tech minds since 2019
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white">
                <Users className="h-10 w-10" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Our Community</h2>
              <p className="mt-2 text-center text-indigo-200">
                Join a vibrant community of tech enthusiasts, developers, and
                innovators.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-center text-indigo-200">
                To inspire and educate the next generation of technology
                leaders.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white">
                <Rocket className="h-10 w-10" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Our Vision</h2>
              <p className="mt-2 text-center text-indigo-200">
                To be the go-to platform for cutting-edge tech insights and
                knowledge sharing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center">Our Story</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-200">
            KinaTechBrainz was founded in 2019 with a simple yet powerful idea:
            to create a space where tech enthusiasts could come together to
            learn, share, and grow. Our journey began with a small group of
            passionate developers and has since blossomed into a thriving
            community of innovators from all corners of the tech world.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center">Join Us</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-200">
            Whether you're a seasoned professional or just starting your tech
            journey, there's a place for you at KinaTechBrainz. Join us in
            shaping the future of technology!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
