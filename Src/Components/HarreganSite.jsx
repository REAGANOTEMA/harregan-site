import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Chicken Thigh/Breast',
    image: 'chicken_thigh.jpg',
    price: 'UGX 5,000',
    description: 'Juicy chicken thigh or breast grilled to perfection – perfect for a quick delicious bite.',
    paymentLink: 'https://flutterwave.com/pay/harregan-chicken-thigh'
  },
  {
    name: 'Half Chicken',
    image: 'half_chicken.jpg',
    price: 'UGX 10,000',
    description: 'Crispy on the outside, tender on the inside. Half chicken served hot with our special sauce.',
    paymentLink: 'https://flutterwave.com/pay/harregan-half-chicken'
  },
  {
    name: 'Whole Chicken',
    image: 'whole_chicken.jpg',
    price: 'UGX 20,000',
    description: 'The ultimate treat! Full grilled chicken bursting with flavor. Great for family meals.',
    paymentLink: 'https://flutterwave.com/pay/harregan-whole-chicken'
  }
];

export default function HarreganSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-100 p-4 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <img src="/logo.jpg" alt="Harregan Logo" className="w-28 h-auto" />
        <h1 className="text-2xl font-bold text-red-600">Harregan Hot Bites and Chips</h1>
      </header>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <MapPin size={16} />
        <span>Located at Jinja, Lubas Market</span>
      </div>

      {/* Products Gallery */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index}>
            <Card className="rounded-2xl shadow-lg">
              <img
                src={`/eats/${item.image}`}
                alt={item.name}
                className="rounded-t-2xl h-40 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-red-700">{item.name}</h2>
                <p className="text-gray-700 text-sm italic mb-1">{item.description}</p>
                <p className="text-gray-800 font-semibold mb-3">{item.price}</p>
                <a
                  href={item.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order ${item.name} now`}
                >
                  <Button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center">
                    <ShoppingCart className="mr-2" size={16} /> Order Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Payment Info */}
      <div className="mt-8 bg-white p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-2">Secure Payments via Flutterwave</h3>
        <p className="text-sm text-gray-700">
          Click the “Order Now” button to pay securely using <strong>Mobile Money, Visa, or Card</strong>. You’ll be redirected to a trusted Flutterwave checkout page supporting all these payment options.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        &copy; 2025 Harregan Hot Bites. All rights reserved.
      </footer>
    </div>
  );
}
