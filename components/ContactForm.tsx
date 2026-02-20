import React, { useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    firstname: string;
    company: string;
    website: string;
    email: string;
    phone: string;
    budget: string;
    interested_in: string[];
  }>({
    firstname: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    budget: '',
    interested_in: []
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Updated 'All of the above' casing to match HubSpot screenshot exactly
  const interests = [
    'Branding', 'Graphic Design', 'Websites',
    'Hubspot CRM', 'Marketing', 'Event Collateral',
    'All of the above', 'Not Sure'
  ];

  const labelStyle: React.CSSProperties = {
    color: '#FFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%', // 21px
  };

  const itemTextStyle: React.CSSProperties = {
    color: '#FFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%', // 21px
  };

  const buttonStyle: React.CSSProperties = {
    // Dimensions
    width: '168.159px',
    height: '51px',
    // Typography
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '130%', // 19.5px
    // Layout
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestClick = (interest: string) => {
    setFormData(prev => {
      const current = prev.interested_in;
      if (current.includes(interest)) {
        return { ...prev, interested_in: current.filter(i => i !== interest) };
      } else {
        return { ...prev, interested_in: [...current, interest] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // HubSpot API details
    const portalId = "22280525";
    const formId = "7f4ed279-e339-4004-b677-718f74d23c9f";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    // Map form fields to HubSpot internal names.
    // NOTE: 'website' and 'budget' are excluded from the payload as they were not in the provided internal names list.
    const fields = [
      { name: 'firstname', value: formData.firstname }, 
      { name: 'company', value: formData.company },
      { name: 'email', value: formData.email },
      { name: 'phone', value: formData.phone.replace(/\s+/g, '') }, // Strip spaces from phone number for better validation
      { name: 'interested_in', value: formData.interested_in.join(';') }, // Join array with semicolon for multiple checkbox values
    ].filter(f => f.value && f.value.trim() !== '');

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
            firstname: '',
            company: '',
            website: '',
            email: '',
            phone: '',
            budget: '',
            interested_in: []
        });
      } else {
        const data = await response.json();
        console.error('HubSpot Submission Error:', data);
        
        // Extract specific error message from HubSpot response if available
        let msg = 'Submission failed. Please check your details and try again.';
        if (data.errors && data.errors.length > 0) {
           msg = `Error: ${data.errors[0].message}`;
           if (data.errors[0].errorType === 'INVALID_FORM_FIELD') {
             msg = `Configuration Error: The field '${data.errors[0].message}' is not enabled in the HubSpot form settings.`;
           }
        } else if (data.message) {
           msg = data.message;
        }
        
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white min-h-[400px] bg-[#2a2a2a] rounded-[32px] p-8">
            <div className="w-16 h-16 bg-[#FE4EF4] rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Message Sent!</h3>
            <p className="text-center text-gray-300 max-w-md mb-8">
                Thank you for reaching out. Your details have been submitted successfully and one of our specialists will be in touch shortly.
            </p>
            <button 
                onClick={() => setStatus('idle')} 
                className="text-[#FE4EF4] font-bold hover:text-white transition-colors border-b-2 border-[#FE4EF4] hover:border-white pb-1"
            >
                Send another message
            </button>
        </div>
    );
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mb-5">
        <div>
            <label htmlFor="firstname" className="block mb-2" style={labelStyle}>Full Name *</label>
            <input 
              id="firstname"
              name="firstname"
              type="text" 
              required
              placeholder="John Doe"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
            />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2" style={labelStyle}>Company Name</label>
            <input 
              id="company"
              name="company"
              type="text" 
              placeholder="ABC Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mb-5">
        <div>
            <label htmlFor="website" className="block mb-2" style={labelStyle}>Website</label>
            <input 
              id="website"
              name="website"
              type="text" 
              placeholder="yourcompany.com.au"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
            />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2" style={labelStyle}>Email *</label>
            <input 
              id="email"
              name="email"
              type="email" 
              required
              placeholder="yourname@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mb-8">
        <div>
            <label htmlFor="phone" className="block mb-2" style={labelStyle}>Phone Number</label>
            <input 
              id="phone"
              name="phone"
              type="tel" 
              placeholder="0412 345 678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
            />
        </div>
        <div>
            <label htmlFor="budget" className="block mb-2" style={labelStyle}>Project or Monthly Budget</label>
            <div className="relative">
                <select 
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3.5 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FE4EF4] transition-shadow"
                >
                    <option value="">Select Budget</option>
                    <option value="$1k - $5k">$1k - $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k+">$10k+</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                    <ChevronDown size={16} />
                </div>
            </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="block mb-4" style={labelStyle}>What are you interested in?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {interests.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => handleInterestClick(item)}
                    className="group w-full flex items-center gap-3 px-4 py-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 transition-colors">
                         {formData.interested_in.includes(item) && (
                             <div className="w-2.5 h-2.5 rounded-full bg-black" />
                         )}
                    </div>
                    <span style={itemTextStyle} className="text-left select-none">{item}</span>
                </button>
            ))}
        </div>
      </div>
      
      {status === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm break-words">
              {errorMessage}
          </div>
      )}

      <div className="mt-8">
        <button 
            type="submit"
            disabled={status === 'submitting'}
            style={buttonStyle} 
            className={`text-white uppercase rounded-full shadow-lg transform transition-all duration-300 ${status === 'submitting' ? 'opacity-80 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'} bg-gradient-to-r from-[#FF0071] to-[#FF55FF] border-2 border-transparent bg-origin-border hover:text-[#FF0071] hover:bg-[linear-gradient(#fff,#fff),linear-gradient(90deg,#FF0071_0%,#FF55FF_100%)] hover:[background-clip:padding-box,border-box] hover:shadow-xl`}
        >
            {status === 'submitting' ? (
                <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    SENDING...
                </>
            ) : (
                'BOOK A CALL'
            )}
        </button>
      </div>
    </form>
  );
};