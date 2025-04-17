/**
 * Contact Page Component
 * 
 * This page provides contact information and a form for users to reach out.
 * It contains:
 * - Contact information (email, location, phone)
 * - Contact form for message submission
 * - Services offered
 * - Response time information
 * 
 * The layout uses a two-column grid on larger screens and single column on mobile.
 * All contact details are provided with appropriate icons and semantic structure.
 */

import ContactForm from "@/components/ContactForm";
import { Headset, Mail, MapPin, Clock, Shield, CheckSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="container px-4 mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Have a security concern or interested in working together? Feel free to reach out through any of the channels below or use the contact form.
        </p>

        {/* Main Content - Two column layout on desktop, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information - Left side (4 columns on desktop) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Card */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="text-primary h-6 w-6" /> Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-400">contact@yaxploit.com</p>
                    <p className="text-gray-400">security@yaxploit.com</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-gray-400">Mumbai, India</p>
                    <p className="text-gray-400">Available for remote work worldwide</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Headset className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-400">+91 98XXXXXXXX</p>
                    <p className="text-gray-400">(For business inquiries only)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response Time Notice */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                <Clock className="text-primary h-5 w-5" /> Response Time
              </h4>
              <p className="text-gray-400">
                I typically respond to all inquiries within 24-48 hours. For urgent security matters, 
                please mention "URGENT" in the subject line.
              </p>
            </div>
            
            {/* Services Offered */}
            <div className="bg-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                <CheckSquare className="text-primary h-5 w-5" /> Services Offered
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-400">Web Application Security Assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-400">Network Penetration Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-400">Security Consulting & Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-400">Bug Bounty Program Setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-400">Security Research Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form - Right side (8 columns on desktop) */}
          <div className="lg:col-span-8 bg-card p-6 sm:p-8 rounded-lg border border-primary/20 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;