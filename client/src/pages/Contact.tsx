import ContactForm from "@/components/ContactForm";
import { Headset, Mail, MapPin } from "lucide-react";

/**
 * Contact Page Component
 * 
 * This page provides contact information and a form for users to reach out.
 * It contains:
 * - Contact information (email, location, phone)
 * - Contact form for message submission
 * 
 * The layout uses a two-column grid on larger screens and single column on mobile.
 */
const Contact = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="container px-4 mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center mb-16">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-lg hover:shadow-primary/5 transition-shadow">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email Contact */}
                <div className="flex items-start gap-4">
                  <Mail className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-400">contact@yaxploit.com</p>
                    <p className="text-gray-400">security@yaxploit.com</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p className="text-gray-400">Mumbai, India</p>
                    <p className="text-gray-400">Available for remote work worldwide</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Headset className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-400">+91 98XXXXXXXX</p>
                    <p className="text-gray-400">(For business inquiries only)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Response Time Notice */}
            <div className="bg-card p-6 rounded-lg border border-primary/20">
              <h4 className="font-medium text-lg mb-2">Response Time</h4>
              <p className="text-gray-400">
                I typically respond to all inquiries within 24-48 hours. For urgent security matters, 
                please mention "URGENT" in the subject line.
              </p>
            </div>
            
            {/* Services Offered */}
            <div className="bg-card p-6 rounded-lg border border-primary/20">
              <h4 className="font-medium text-lg mb-2">Services Offered</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Web Application Security Assessments</li>
                <li>Network Penetration Testing</li>
                <li>Security Consulting & Training</li>
                <li>Bug Bounty Program Setup</li>
                <li>Security Research Collaboration</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;