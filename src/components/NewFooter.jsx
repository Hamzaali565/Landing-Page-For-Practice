import React from "react";

export default function NewFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-blue-500 pb-2 inline-block">
              CONTACT US
            </h3>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">📞</span>
              <p>Tel: (+44) 01799 512 070</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">✉️</span>
              <p>Email: customerservice@eos-ltd.com</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">⏰</span>
              <div>
                <p>
                  <span className="font-medium">Monday-Friday:</span> 9:00am
                  till 5:30pm
                </p>
                <p>
                  <span className="font-medium">Saturday-Sunday:</span> Closed
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">🏢</span>
              <div>
                <p className="font-medium">
                  European Office Supplies Ltd (EOS)
                </p>
                <p>Unit 18, Carlton Place, Shire Hill</p>
                <p>Saffron Walden</p>
                <p>Essex CB11 3AU</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold border-b border-blue-500 pb-2 inline-block mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Home
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  About Us
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Products
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Special Offers
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  FAQ
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Contact
                </p>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold border-b border-blue-500 pb-2 inline-block mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Office Supplies
                </p>
              </li>

              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Paper Products
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Technology
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Janitorial Supplies
                </p>
              </li>
              <li>
                <p className="text-gray-300 cursor-pointer hover:text-blue-400 transition duration-300">
                  Eco-Friendly Products
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold border-b border-blue-500 pb-2 inline-block mb-4">
              NEWSLETTER
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <p className="bg-gray-700 hover:bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
                <span>fb</span>
              </p>
              <p className="bg-gray-700 hover:bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
                <span>tw</span>
              </p>
              <p className="bg-gray-700 hover:bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
                <span>in</span>
              </p>
              <p className="bg-gray-700 hover:bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
                <span>ig</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} European Office Supplies Ltd. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
