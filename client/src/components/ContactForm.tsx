import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      reset();
      setSubmitSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Contact Illustration - Left Side */}
      <div>
        <div className="relative overflow-hidden rounded-lg shadow-2xl group">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg?w=740"
            alt="Contact illustration"
            className="rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="font-bold text-lg">Get in Touch</p>
              <p className="text-sm text-gray-300">I'm available for security consultations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form - Right Side */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your Name"
              className="bg-card border-gray-700 focus:border-primary mt-2"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Your Email"
              className="bg-card border-gray-700 focus:border-primary mt-2"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={5}
              placeholder="Your Message"
              className="bg-card border-gray-700 focus:border-primary mt-2"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-secondary transition-all duration-300"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Quick Contact Info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Location</h4>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <p className="text-gray-400">contact@yaxploit.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
