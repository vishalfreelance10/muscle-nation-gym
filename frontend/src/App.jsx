import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Dumbbell, Heart, Users } from 'lucide-react';

export default function MuscleNationFitness() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const [submitted, setSubmitted] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    '/images/hero1.webp',
    '/images/hero2.webp',
    '/images/hero3.webp',
    '/images/hero4.webp',
    '/images/hero5.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const whatsappClick = () => {
    window.open('https://wa.me/919503363863', '_blank');
  };

  const callClick = () => {
    window.location.href = 'tel:+919503363863';
  };

  return (
    <div className="bg-black text-white">
      {/* Floating WhatsApp Button */}
      <button
        onClick={whatsappClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg z-50 transition"
      >
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.746 1.14l-.33.165-3.425.342 .348 3.36.177.339a9.9 9.9 0 001.441 4.694 10.017 10.017 0 004.833 3.265l.331.078 3.515-.352.339-.177c1.538-.76 2.888-1.838 3.900-3.148l.261-.338-.001-3.701c-.001-.495-.053-.987-.156-1.467-.105-.49-.257-.975-.457-1.439l-.03-.061L12.05 6.98z" />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="bg-black border-b border-red-600 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/favicon.webp" alt="Logo" className="h-10 w-10 rounded-full" />
            <h1 className="text-2xl font-bold">
              <span className="text-white">MUSCLE NATION</span>
              <span className="text-red-600 ml-2">FITNESS</span>
            </h1>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#trainers" className="hover:text-red-600 transition">Trainers</a>
            <a href="#pricing" className="hover:text-red-600 transition">Pricing</a>
            <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen w-full px-6 text-center overflow-hidden flex">
        {/* Left side - Text */}
        <div className="w-1/2 flex flex-col justify-center items-start pl-12">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-white">WE ARE</span>
            <br />
            <span className="text-red-600 text-7xl drop-shadow-lg">OPEN NOW</span>
          </h2>
          <p className="text-gray-200 text-xl mb-8">GET READY TO TRANSFORM YOUR BODY AND MIND.</p>
          <div className="flex gap-4">
            <button onClick={whatsappClick} className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold">WhatsApp Now</button>
            <button onClick={callClick} className="border-2 border-red-600 px-8 py-3 rounded font-bold">Call Us</button>
          </div>
        </div>

        {/* Right side - Images Carousel */}
        <div className="w-1/2 relative h-full">
          {heroImages.map((img, i) => (
            <img key={i} src={img} alt={`Hero ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                }`} />
          ))}

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentHeroIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentHeroIndex ? 'bg-red-600 w-8' : 'bg-white/50'}`} />
            ))}
          </div>

          <button onClick={() => setCurrentHeroIndex(currentHeroIndex === 0 ? heroImages.length - 1 : currentHeroIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full z-20">←</button>
          <button onClick={() => setCurrentHeroIndex((currentHeroIndex + 1) % heroImages.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full z-20">→</button>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-red-600">ABOUT</span> MUSCLE NATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Dumbbell className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h4 className="text-xl font-bold mb-2">State-of-the-Art Equipment</h4>
              <p className="text-gray-400">Premium dumbbells, machines, and cardio equipment for complete fitness</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h4 className="text-xl font-bold mb-2">Expert Trainers</h4>
              <p className="text-gray-400">Certified professionals dedicated to your fitness goals</p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h4 className="text-xl font-bold mb-2">Community Focused</h4>
              <p className="text-gray-400">Join a supportive community committed to transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            OUR <span className="text-red-600">TRAINERS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Singh', specialty: 'Strength Training', image: '/images/trainer 1.png' },
              { name: 'pranav Sharma', specialty: 'HIIT & Cardio', image: '/images/trainer 2.png' },
              { name: 'Vikram Patel', specialty: 'Bodybuilding', image: '/images/trainer 3.png' }
            ].map((trainer, i) => (
              <div key={i} className="text-center">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover mb-4 rounded"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-${1552258987 + i}-8c6e62f505a9?w=300&h=300&fit=crop`;
                  }}
                />
                <h4 className="text-xl font-bold">{trainer.name}</h4>
                <p className="text-red-600">{trainer.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            MEMBERSHIP <span className="text-red-600">PLANS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BASIC', price: '₹1,999', features: ['Gym Access', 'Lockers', 'Water'] },
              { name: 'STANDARD', price: '₹3,999', features: ['Gym Access', 'Trainer Sessions', 'Locker', 'Water', 'Nutrition Plan'], highlight: true },
              { name: 'PREMIUM', price: '₹5,999', features: ['Gym Access', 'Personal Trainer', 'Locker', 'Water', 'Nutrition + Meal Plan', 'Group Classes'] }
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded ${plan.highlight
                  ? 'bg-red-600 transform scale-105'
                  : 'bg-black border-2 border-red-600'
                  }`}
              >
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <p className="text-sm text-gray-300 mb-6">per month</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={whatsappClick}
                  className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                >
                  JOIN NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            OUR <span className="text-red-600">FACILITY</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              '/images/gym1.jpg',
              '/images/gym2.jpg',
              '/images/gym3.jpg',
              '/images/gym4.jpg',
              '/images/gym5.jpg',
              '/images/gym6.jpg'
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Facility ${i + 1}`}
                className="w-full h-80 object-cover rounded hover:opacity-80 transition cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            GET IN <span className="text-red-600">TOUCH</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-red-600 px-4 py-2 rounded-2xl text-white placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-red-600 px-4 py-2 rounded-2xl text-white placeholder-gray-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border-2 border-red-600 px-4 py-2 rounded-2xl text-white placeholder-gray-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black border-2 border-red-600 px-4 py-2 rounded-2xl text-white placeholder-gray-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold transition"
                >
                  SEND MESSAGE
                </button>
                {submitted && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="border-2 border-red-600 p-6 rounded">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">LOCATION</h4>
                    <p className="text-gray-300">2nd floor, ITI Rd, above Naivaidyam hotel, Goodwill Society, Sanewadi, Aundh, Pune, Maharashtra 411067</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-600 p-6 rounded">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">PHONE</h4>
                    <p className="text-gray-300">+91 9503363863</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden h-80">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8459141288607!2d73.8197!3d18.5644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6b5d5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sAundh%2C%20Pune!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"

                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-600 py-8 px-6 text-center text-gray-500">
        <p>© 2024 Muscle Nation Fitness. All Rights Reserved.</p>
      </footer>
    </div>
  );
}