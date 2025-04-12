import React from 'react'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <div>
        <footer className="bg-[#0B1D3A] text-gray-300 py-12 px-6">
            <Newsletter />
            <div className="max-w-6xl mx-auto">
        <hr className="border-[#DCDCDC] border-[1px_0px_1px_0px] border-solid mb-8" />
        
        {/* Brand links */}
        <div className="mb-8">
          <h4 className="text-white text-lg font-bold mb-4">About Our Brands</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">About American Girl</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Barbie</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Barney</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Fisher-Price</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Hot-Wheels</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Mattel</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Mattel Creations</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Mattel Brick Shop</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Monster High</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About Thomas & Friends</a>
          </div>
        </div>
        
        <hr className="border-[#DCDCDC] border-[1px_0px_1px_0px] border-solid mb-8" />
        
        {/* Footer navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Shop & Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop American Girl</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop Mattel Creations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop Barbie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop Hot Wheels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop Fisher-Price</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Mattel Playroom</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Rates & Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Helpful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Submit Product Ideas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Replacement Parts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Product Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Recall & Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">MEGA Building Instructions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Mattel Toy Store</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Mattel Corporate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Corporate Communications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Statement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookies & Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Accessibility Statement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>


        
        {/* Copyright section */}
        <div className="mt-12 text-center text-sm text-gray-500 border-t-[#DCDCDC] border-t border-solid">
          <p>© {new Date().getFullYear()} Mattel. All Rights Reserved.</p>
        </div>
      </div>
        </footer>
    </div>
  )
}
