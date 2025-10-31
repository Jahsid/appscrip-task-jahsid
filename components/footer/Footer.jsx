import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white px-6 py-8 md:px-12 md:py-10"
      role="contentinfo"
    >
      <section
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        aria-label="Subscribe to newsletter"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2 uppercase">
            BE THE FIRST TO KNOW
          </h2>
          <p className="mb-5">Sign up for updates from metta muse.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email address"
              className="w-full sm:w-2/3 px-3 py-2 bg-white text-black focus:outline-none"
            />
            <button
              className="border border-gray-500 text-white px-4 py-2 hover:bg-gray-800 transition"
              aria-label="Subscribe to newsletter"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        <address className="not-italic text-sm leading-6">
          <h2 className="text-lg font-semibold mb-2 uppercase">CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>
            <a
              href="mailto:customercare@metamuse.com"
              className=" hover:text-gray-300"
            >
              customercare@metamuse.com
            </a>
          </p>
          <h2 className="text-lg font-semibold mb-2 mt-5 uppercase">CURRENCY</h2>
          <p>USD</p>
          <p className="text-xs mt-2">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </address>
      </section>

      <hr className="border-white my-6" />

      <section
        className="flex flex-wrap justify-between gap-6"
        aria-label="Footer navigation"
      >
        <div>
          <h2 className="text-lg font-semibold mb-2 uppercase">metta muse</h2>
          <ul className="space-y-1 text-sm">
            {["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliance Docs"].map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 uppercase">QUICK LINKS</h2>
          <ul className="space-y-1 text-sm">
            {[
              "Orders & Shipping",
              "Join/Login as Seller",
              "Payments & Pricing",
              "Returns & Refunds",
              "FAQs",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 uppercase">FOLLOW US</h2>
          <div className="flex items-center gap-4 text-xl">
            <IoLogoFacebook
              aria-label="Facebook"
              className="cursor-pointer hover:text-gray-400"
            />
            <IoLogoInstagram
              aria-label="Instagram"
              className="cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
      </section>

      <p className="text-center text-xs mt-8 text-gray-400">
        © {new Date().getFullYear()} mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
