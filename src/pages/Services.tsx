import React from 'react';
import { motion } from 'framer-motion';
import Custom from '../assets/hardware.png';
import Custom1 from '../assets/software.png';
import { Monitor, Code, FileCode, Shield, Server, Network, Cpu, Wrench, PenTool as Tool, Cloud, Database, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Monitor className="h-10 w-10" />,
      title: 'Web Development',
      desc: "Expert web development solutions with seamless integration, optimization, and scalable design for a future-ready digital presence.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "UI/UX Design"
      ]
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Custom Development',
      desc: "Delivering tailored software solutions that meet your unique business needs, enhancing efficiency and driving innovation.",
      features: [
        "Custom Software Development",
        "API Integration",
        "Legacy System Modernization",
        "Software Maintenance"
      ]
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: 'Mobile App Development',
      desc: "Creating powerful mobile applications that provide seamless experiences across all platforms and devices.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "Mobile App Maintenance"
      ]
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Cybersecurity',
      desc: "Protecting your digital assets with advanced security solutions that guard against evolving threats and ensure data integrity.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Vulnerability Assessment",
        "Security Training"
      ]
    },
    // {
    //   icon: <Cloud className="h-10 w-10" />,
    //   title: 'Cloud Solutions',
    //   desc: "Comprehensive cloud services to help businesses leverage the power of cloud computing for enhanced scalability and efficiency.",
    //   features: [
    //     "Cloud Migration",
    //     "Cloud Architecture",
    //     "Cloud Security",
    //     "Performance Optimization"
    //   ]
    // },
    {
      icon: <Database className="h-10 w-10" />,
      title: 'Database Services',
      desc: "Expert database management and optimization services to ensure your data is secure, efficient, and readily available.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Solutions"
      ]
    },
    {
      icon: <img src={Custom1}  className="h-10 w-10" />,
      title: 'Software Amc',
      desc: "Comprehensive Software AMC services ensuring seamless performance, reliability, and updates with:",
      features: [
        "Regular Maintenance",
        "Bug Fixes",
        "Version Upgrades",
        "Backup Solutions"
      ]
    },
    {
      icon: <img src={Custom}  className="h-10 w-10" />,
      title: 'Hardware Amc',
      desc: "Reliable Hardware AMC services for optimal performance and longevity, including:",
      features: [
        "Preventive Maintenance",
        "On-Site Support",
        "Spare Parts Replacement As per the plan",
        "OS installation"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business needs and objectives through detailed consultation."
    },
    {
      number: "02",
      title: "Planning",
      description: "Our team creates a comprehensive strategy and roadmap for your project."
    },
    {
      number: "03",
      title: "Development",
      description: "We implement the solution using cutting-edge technologies and best practices."
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing ensures your solution meets the highest quality standards."
    },
    {
      number: "05",
      title: "Deployment",
      description: "We carefully launch your solution and ensure smooth implementation."
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and support to keep your solution running optimally."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to drive your business forward in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900 hover:to-purple-900 transition-all duration-500"
              >
                <div className="text-blue-500 mb-6 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-200 transition-colors">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-200">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8"
              >
                <div className="text-7xl font-bold text-blue-500/10 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss how our services can help transform your business
            </p>
              <Link to="/contact">
            <motion.button
            
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </motion.button>
            </Link>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}