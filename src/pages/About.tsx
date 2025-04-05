import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Briefcase } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '15+', label: 'Projects Completed', icon: <Briefcase className="h-6 w-9" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="h-6 w-6" /> },
    // { number: '10+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> },
    { number: '15+', label: 'Expert Team Members', icon: <Target className="h-6 w-6" /> },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve."
    },
    {
      title: "Excellence",
      description: "Our commitment to quality ensures that every project meets the highest standards of performance and reliability."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, fostering partnerships that drive success and achieve remarkable results."
    },
    {
      title: "Integrity",
      description: "Trust and transparency are the foundation of our relationships with clients, partners, and team members."
    }
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexalate</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bridging technology gaps and transforming businesses 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team" 
              className="w-full rounded-2xl mb-8 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Nexalate, we believe in the power of technology to transform businesses and create lasting impact. Our journey began with a simple mission: to help organizations navigate the complex landscape of digital transformation and emerge stronger, more efficient, and future-ready.
              </p>
              <p className="text-gray-300">
                Today, we're proud to be trusted partners to businesses across the globe, delivering innovative solutions that drive growth and success. Our team of experts brings together deep industry knowledge and technical expertise to solve complex challenges and create meaningful outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl" />
            </motion.div>
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
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"
              >
                <div className="text-blue-500 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}