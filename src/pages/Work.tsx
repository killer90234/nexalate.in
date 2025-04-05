import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, Award } from 'lucide-react';

export default function Work() {
  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      client: 'Global Tech Solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      description: 'Complete cloud infrastructure migration and optimization for a Fortune 500 company',
      duration: '8 months',
      team: '12 experts',
      achievement: 'Reduced operational costs by 40%'
    },
    {
      title: 'Cybersecurity Implementation',
      client: 'FinTech Innovation Corp',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      description: 'Enterprise-level security system implementation with advanced threat detection',
      duration: '6 months',
      team: '8 experts',
      achievement: 'Zero security breaches since deployment'
    },
    {
      title: 'Digital Transformation',
      client: 'Retail Excellence Group',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      description: 'End-to-end digital transformation project including e-commerce platform',
      duration: '12 months',
      team: '15 experts',
      achievement: '200% increase in online sales'
    },
    {
      title: 'IoT Infrastructure Setup',
      client: 'Smart Manufacturing Co',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      description: 'Implementation of IoT sensors and real-time monitoring system',
      duration: '9 months',
      team: '10 experts',
      achievement: '35% improvement in efficiency'
    }
  ];

  return (
    <div className="bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing our successful projects and transformations that have helped businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-blue-500">{project.title}</h3>
                  <ExternalLink className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Award className="h-4 w-4" />
                    <span>{project.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}