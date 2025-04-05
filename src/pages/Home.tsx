import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Infrastructure",
    "Cybersecurity Services",
    "Hardware AMC",
    "Software AMC"
  ];

  const stats = [ 
    { number: "15+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    // { number: "10+", label: "Years Experience" },
    { number: "15+", label: "Expert Team" }
  ];

  const technologies = [
    { name: "React", level: "95%" },
    { name: "Node.js", level: "90%" },
    { name: "Python", level: "85%" },
    { name: "Flutter", level: "88%" },
    { name: "DevOps", level: "92%" },
    { name: "Next Js", level: "85%" },
    { name: "Mern Stack", level: "89%" },
    { name: "Cybersecurity", level: "87%" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bridging the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We transform businesses through innovative IT solutions and seamless integration services.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-600 transition-colors"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for your business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <span className="text-lg text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 text-lg">Technologies we specialize in</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">{tech.name}</span>
                  <span className="text-blue-500">{tech.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.level }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's work together to bring your vision to life with cutting-edge technology solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-600 transition-colors mx-auto"
              >
                <span>Get Started</span>
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}