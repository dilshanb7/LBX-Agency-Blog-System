import React from 'react';
import { ContactForm } from './ContactForm';
import { Facebook, Instagram, Linkedin, ArrowUpRight, ArrowRight } from 'lucide-react';

const SERVICES = [
  { name: 'Branding & Identity', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6874cfa14b1c6001f24e4fac_services%20icons.svg' },
  { name: 'Logo Design', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6874cfa14b1c6001f24e4fac_services%20icons.svg' }, // Reusing branding icon as specific one not provided
  { name: 'Website Design & Development', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6874d5d75b83fbcec4bfe7cf_services%20icons2.svg' },
  { name: 'Hubspot CRM & Automation', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870ecb8a8e62f7c3800258b_CRM2%203.svg' },
  { name: 'Digital Marketing', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6874d64dd3fc087918d7bf41_services%20icons4.svg' },
  { name: 'Print and Publication', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6874d67c7695e3a04c3eab65_services%20icons5.svg' },
  { name: 'Packaging & POS', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/68774c073e177f6468e3a5ae_7.svg' },
  { name: 'Event Branding & Collateral', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/68774c07d1b2ecb23cc45d0e_2.svg' },
  { name: 'Outdoor Marketing', icon: 'https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/68774c0713efb2c9b682552c_8.svg' },
];

export const Footer: React.FC = () => {
  const headingStyle: React.CSSProperties = {
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '50px',
    textTransform: 'uppercase',
  };

  const testimonialStyle: React.CSSProperties = {
    color: '#FFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '150%', // 45px
  };

  const unlockHeadingStyle: React.CSSProperties = {
    color: '#FFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Poppins, sans-serif',
    fontSize: '35px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '50px', // 142.857%
  };

  const brandTextStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px', // 150%
  };

  const servicesHeadingStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '200%', // 32px
  };

  const serviceItemStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '200%', // 32px
  };
  
  const footerLinkStyle: React.CSSProperties = {
     color: '#FFF',
     fontFamily: 'Poppins, sans-serif',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px', // 150%
  };

  const contactInfoStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px', // 150%
  };

  return (
    <footer className="bg-[#100510] text-white pt-16 md:pt-24 pb-10 relative overflow-hidden font-poppins">
        {/* Background Gradients */}
        <div 
            className="absolute left-0 top-0 w-[800px] h-[800px] bg-[#72191b] opacity-20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0"
        />
        <div 
            className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#231030] opacity-20 blur-[120px] rounded-full translate-x-1/3 translate-y-1/4 pointer-events-none z-0"
        />

        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
            
            {/* --- CONTACT SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center mb-24 border-b border-white/10 pb-24">
                {/* Left Column: Info */}
                <div className="flex flex-col pt-4">
                    <div className="mb-12">
                        <h2 style={{ ...headingStyle, color: '#FFF' }} className="mb-2">
                            READY TO TALK TO A
                        </h2>
                        <h2 style={{ ...headingStyle, color: '#FE4EF4' }}>
                            SPECIALIST?
                        </h2>
                    </div>

                    <div className="space-y-8 mb-16">
                        <div className="flex gap-5 items-start">
                            <img 
                                src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870a608bde138578f7b6b8c_Asset%2036navy%201.svg" 
                                alt="Bullet"
                                className="w-[20px] h-[20px] mt-1 shrink-0"
                            />
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-md font-light">
                                Talk directly with one of our experts and get useful, honest advice.
                            </p>
                        </div>
                        <div className="flex gap-5 items-start">
                            <img 
                                src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870a608bde138578f7b6b8c_Asset%2036navy%201.svg" 
                                alt="Bullet"
                                className="w-[20px] h-[20px] mt-1 shrink-0"
                            />
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-md font-light">
                                We’ll dig into your goals, find the gaps and share ideas you can act on straight away.
                            </p>
                        </div>
                        <div className="flex gap-5 items-start">
                            <img 
                                src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870a608bde138578f7b6b8c_Asset%2036navy%201.svg" 
                                alt="Bullet"
                                className="w-[20px] h-[20px] mt-1 shrink-0"
                            />
                            <p className="text-white text-base md:text-lg leading-relaxed max-w-md font-light">
                                No buzzwords, no pressure, just clear direction and next steps.
                            </p>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mb-16">
                        <p style={testimonialStyle} className="mb-8 max-w-xl">
                            “Their ability to consistently deliver exceptional results, whether on high-level strategic initiatives or specific design projects, is truly remarkable.”
                        </p>
                        <div>
                            <img 
                              src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870b043d0a9451a90647e35_Contact-headshot.svg" 
                              alt="Esther Roper" 
                              className="h-auto w-auto max-h-[80px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-[#2a2a2a] rounded-[32px] p-6 md:px-10 md:py-10 shadow-2xl border border-white/5 relative flex flex-col justify-center">
                    <div className="mb-8">
                         <img 
                            src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/686e6057bf848efbd3122a26_Google%20rating(q).svg" 
                            alt="Google Review Rating"
                            className="h-auto w-auto"
                         />
                    </div>

                    <h3 style={unlockHeadingStyle} className="mb-8">Unlock Your Next Move</h3>
                    <ContactForm />
                </div>
            </div>

            {/* --- NEW FOOTER CONTENT (Updated Layout to Flex Justify-Between) --- */}
            {/* Using Flexbox with justify-between distributes the empty space equally between the columns.
                This naturally pushes the middle column slightly to the right if the left column content is wider than the right column content,
                which creates a better visual balance as requested. */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
                
                {/* Column 1: Brand Info (Left Aligned) */}
                <div className="flex flex-col max-w-[360px] xl:max-w-sm">
                    <img 
                        src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6899a063ef373010ec5402bd_Asset%2036%201.svg" 
                        alt="Lightbox Agency" 
                        className="w-48 mb-8"
                    />
                    <p style={brandTextStyle} className="mb-10">
                        Reach out to Lightbox Agency today and let us help you elevate your brand to the next level.
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-12">
                        <img 
                            src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/67d12a5cbf071e9d1cc3bab6_hubspot-partner%201.png" 
                            alt="HubSpot Partner" 
                            style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                        />
                         <img 
                            src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/68ad2d66ecb89de7bfb5dcb4_APP-Badge-Preferred.svg" 
                            alt="WP Engine Preferred Partner" 
                            style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                        <a href="#" style={footerLinkStyle} className="hover:text-[#FE4EF4] transition-colors w-fit">Privacy Policy</a>
                        <a href="#" style={footerLinkStyle} className="hover:text-[#FE4EF4] transition-colors w-fit">Terms & Conditions</a>
                    </div>
                </div>

                {/* Column 2: Services (Centered in available space, creating equal visual gaps) */}
                <div className="flex flex-col">
                    <div>
                        <h3 style={servicesHeadingStyle} className="mb-8">Our Services</h3>
                        <div className="flex flex-col gap-0">
                            {SERVICES.map((service) => (
                                <div key={service.name} className="flex items-center gap-4 group cursor-pointer mb-2">
                                    <img src={service.icon} alt="" className="w-5 h-5 shrink-0 object-contain" />
                                    <span style={serviceItemStyle} className="group-hover:text-[#FE4EF4] transition-colors">
                                        {service.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 3: Contact & Actions (Right Aligned) */}
                <div className="flex flex-col items-start lg:items-end lg:text-right">
                     <a href="mailto:hello@lbxagency.com" style={contactInfoStyle} className="flex items-center gap-2 hover:text-[#FE4EF4] transition-colors mb-2 group">
                        hello@lbxagency.com <ArrowUpRight size={18} className="text-white group-hover:text-[#FE4EF4] transition-colors" />
                     </a>
                     <a href="tel:+61388209685" style={contactInfoStyle} className="flex items-center gap-2 hover:text-[#FE4EF4] transition-colors mb-8 group">
                        +61 388 209 685 <ArrowUpRight size={18} className="text-white group-hover:text-[#FE4EF4] transition-colors" />
                     </a>

                     <div className="flex gap-4 mb-8">
                        <a href="https://facebook.com/lbxagency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FE4EF4] flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-105">
                            <Facebook size={20} fill="black" strokeWidth={0} />
                        </a>
                        <a href="https://www.instagram.com/lbxagency/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FE4EF4] flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-105">
                            <Instagram size={20} strokeWidth={2.5} />
                        </a>
                         <a href="https://au.linkedin.com/company/lightbox-digital-pty-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FE4EF4] flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-105">
                            <Linkedin size={20} fill="black" strokeWidth={0} />
                        </a>
                     </div>

                     <a href="https://www.lbxagency.com.au/get-in-touch" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#FF0071] to-[#FF55FF] hover:from-white hover:to-white hover:text-[#FE4EF4] text-white font-bold py-3.5 px-8 rounded-full uppercase tracking-wider flex items-center gap-2 transition-all mb-12 shadow-[0_0_20px_rgba(254,78,244,0.3)] hover:shadow-[0_0_30px_rgba(254,78,244,0.5)] text-sm">
                        Get Started <ArrowRight size={18} />
                     </a>

                     <div className="mt-auto">
                        <h4 style={contactInfoStyle} className="mb-1">LBX Agency Headquarters</h4>
                        <p style={contactInfoStyle}>13/88 Merrindale Drive,</p>
                        <p style={contactInfoStyle}>Croydon South, Victoria</p>
                     </div>
                </div>

            </div>
            
            {/* Copyright */}
            <div className="mt-20 pt-8 border-t border-white/10 text-center lg:text-left">
                 <p style={footerLinkStyle}>Copyright © Lightbox Digital, All rights reserved</p>
            </div>
        </div>
    </footer>
  );
};