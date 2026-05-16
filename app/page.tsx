'use client';
export default function DigitalGalaxyTechWebsite() {
  const services = [
    {
      title: 'Amazon Marketplace Management',
      desc: 'Professional account management for automotive brands selling on Amazon USA.',
    },
    {
      title: 'eBay Auto Parts Selling',
      desc: 'Optimized eBay storefront management designed for auto parts growth.',
    },
    {
      title: 'Product Listing Optimization',
      desc: 'SEO-focused product listings with conversion-driven content and images.',
    },
    {
      title: 'Inventory Automation',
      desc: 'Real-time inventory syncing and order management solutions.',
    },
    {
      title: 'Storefront Branding',
      desc: 'Premium branding and storefront design for automotive eCommerce businesses.',
    },
    {
      title: 'Growth Strategy',
      desc: 'Scaling automotive marketplaces with data-driven eCommerce strategies.',
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden min-h-screen relative scroll-smooth">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#0b1024] to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30" />
          <h1 className="text-xl md:text-3xl font-bold tracking-widest uppercase">
            Digital Galaxy Tech
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#services" className="hover:text-cyan-300 transition">Services</a>
          <a href="#about" className="hover:text-cyan-300 transition">About</a>
          <a href="#why" className="hover:text-cyan-300 transition">Why Us</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-6 md:px-12">
        <div className="max-w-6xl">
          <p className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-sm mb-8 backdrop-blur-md">
            USA Auto Parts eCommerce Specialists
          </p>

          <h2 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8">
            Scaling
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Amazon & eBay
            </span>
            <br />
            Auto Parts Businesses
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Digital Galaxy Tech helps automotive businesses dominate online marketplaces through advanced Amazon and eBay management, listing optimization, automation systems, and scalable eCommerce growth strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-lg hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
              Start Your Growth
            </button>

            <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition text-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 md:px-12 py-28">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h3 className="text-5xl font-bold mb-6">
            Our Services
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Comprehensive automotive eCommerce solutions designed for marketplace growth in the USA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-6 shadow-xl shadow-cyan-500/20 group-hover:scale-110 transition-transform" />

              <h4 className="text-2xl font-bold mb-4">
                {service.title}
              </h4>

              <p className="text-gray-400 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-6 md:px-12 py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-5xl font-bold leading-tight mb-8">
              The Future of Automotive eCommerce
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Digital Galaxy Tech is focused on helping automotive brands expand their reach across Amazon, eBay, and leading online marketplaces in the United States.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our mission is to provide scalable marketplace solutions, optimized product strategies, and automation systems that increase sales and simplify operations for auto parts businesses.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-5xl font-bold text-cyan-400">50+</h4>
                <p className="text-gray-400 mt-2">Marketplace Projects</p>
              </div>

              <div>
                <h4 className="text-5xl font-bold text-purple-400">24/7</h4>
                <p className="text-gray-400 mt-2">Business Support</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />

            <div className="relative w-[350px] h-[350px] rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 animate-spin [animation-duration:12s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="relative z-10 px-6 md:px-12 py-28">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8">
            Why Choose Digital Galaxy Tech?
          </h3>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
            We combine marketplace expertise, automation, branding, and growth strategies to help automotive businesses succeed online.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">Marketplace Experts</h4>
              <p className="text-gray-400 leading-relaxed">
                Specialized in Amazon and eBay automotive selling.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h4 className="text-2xl font-bold mb-4 text-purple-400">Scalable Systems</h4>
              <p className="text-gray-400 leading-relaxed">
                Smart automation and inventory management for growth.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h4 className="text-2xl font-bold mb-4 text-pink-400">USA Market Focus</h4>
              <p className="text-gray-400 leading-relaxed">
                Strategies built specifically for the US automotive industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 py-28">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl p-14 text-center shadow-2xl shadow-cyan-500/10">
          <h3 className="text-5xl font-bold mb-6">
            Ready To Scale Your Auto Parts Business?
          </h3>

          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Let Digital Galaxy Tech help your business grow across Amazon and eBay marketplaces with advanced eCommerce solutions.
          </p>

          <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-xl font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h3 className="text-4xl font-bold text-center mb-10">
            Get In Touch
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-300">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Digital Galaxy Tech</h4>
              <p className="leading-relaxed text-gray-400">
                Specialized automotive eCommerce solutions for Amazon and eBay sellers across the USA.
              </p>
            </div>

            <div className="space-y-4">
              <p>Email: info@digitalgalaxytech.com</p>
              <p>Services: Amazon, eBay & Automotive eCommerce</p>
              <p>Market Focus: United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 Digital Galaxy Tech — Automotive eCommerce Solutions
      </footer>
    </div>
  );
}
