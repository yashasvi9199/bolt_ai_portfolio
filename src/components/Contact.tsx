import { useState, useRef, FormEvent } from 'react';
import { Mail, MapPin, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } else {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 bg-[#0A192F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Get In <span className="text-[#64FFDA]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto mb-4" />
          <p className="text-[#CCD6F6]/70 text-lg">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-[#CCD6F6] mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-[#112240] rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300">
                <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                  <Mail className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium mb-1">Email</h4>
                  <a
                    href="mailto:yashaldiya@gmail.com"
                    className="text-[#64FFDA] hover:underline"
                  >
                    yashaldiya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#112240] rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300">
                <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                  <MapPin className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium mb-1">Location</h4>
                  <p className="text-[#CCD6F6]/80">Jaipur, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#112240] rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300">
                <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                  <Github className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium mb-1">GitHub</h4>
                  <a
                    href="https://github.com/yashasvi9199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64FFDA] hover:underline"
                  >
                    github.com/yashasvi9199
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#112240] rounded-lg border border-[#64FFDA]/20">
              <h4 className="text-[#CCD6F6] font-medium mb-4">Professional Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Open-source contributions',
                  'Modern web technologies',
                  'Knowledge management systems',
                  'Agile development',
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#CCD6F6] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#112240] border ${
                    errors.name ? 'border-red-500' : 'border-[#64FFDA]/20'
                  } rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[#CCD6F6] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#112240] border ${
                    errors.email ? 'border-red-500' : 'border-[#64FFDA]/20'
                  } rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#CCD6F6] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#112240] border ${
                    errors.subject ? 'border-red-500' : 'border-[#64FFDA]/20'
                  } rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition-colors`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[#CCD6F6] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-[#112240] border ${
                    errors.message ? 'border-red-500' : 'border-[#64FFDA]/20'
                  } rounded-lg text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition-colors resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
                  Please fix the errors above and try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#64FFDA] text-[#0A192F] rounded-lg hover:bg-[#64FFDA]/80 transition-all duration-300 font-medium text-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
