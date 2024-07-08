import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Transforming Local Commerce: Building an AI-Driven Platform - Madii</h1>
          <p className="mt-2 text-lg">Enhancing Efficiency, Reducing Costs, and Building Communities</p>
          <div className="mt-4">
            <button className="bg-white text-blue-600 py-2 px-4 rounded-md mx-2">Get Started</button>
            <button className="bg-white text-blue-600 py-2 px-4 rounded-md mx-2">Join for Free</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto my-10 px-4">
        <section className="my-10 text-center">
          <h2 className="text-2xl font-semibold">Welcome to the Future of Local Commerce with Madii</h2>
          <p className="mt-4">Discover a smarter, more efficient way to buy and sell local products. Our AI-driven platform connects buyers and sellers, simplifies deliveries, and ensures quality, all while fostering a sense of community.</p>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-semibold text-center">Key Features</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Cost-Effective Delivery</h3>
              <p className="mt-2">Community-based delivery options reduce shipping costs and simplify logistics.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Enhanced Market Reach</h3>
              <p className="mt-2">AI-driven tools help local sellers expand their customer base and reach new markets.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="mt-2">Robust review and rating systems build trust and ensure product quality.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Community Engagement</h3>
              <p className="mt-2">Join groups for discounts, participate in group buying, and support local businesses.</p>
            </div>
          </div>
        </section>

       

        <section className="my-10">
          <h2 className="text-2xl font-semibold text-center">Benefits</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-center">For Buyers:</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Affordable local products.</li>
                <li>Convenient and reliable deliveries.</li>
                <li>Trustworthy quality assurance.</li>
              </ul>
              <div className="mt-4 text-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Join Discount</button>
              </div>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-center">For Sellers:</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Wider market reach.</li>
                <li>Efficient delivery solutions.</li>
                <li>Tools to build customer trust.</li>
              </ul>
              <div className="mt-4 text-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Post Your Discount</button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="text-2xl font-semibold">Join Us Today</h2>
          <p className="mt-4">Be part of a revolution in local commerce with Madii. Whether you’re a buyer looking for the best local deals or a seller wanting to reach more customers, our platform is designed for you.</p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md mx-2">Sign Up Now</button>
            <button className="bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded-md mx-2">Learn More</button>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4">Have questions? Want to learn more? Contact us at <a href="mailto:email@example.com" className="text-blue-600">bereketkume@gmail.com</a> or follow us on social media.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>Stay Connected</p>
          <div className="mt-2">
            <a href="#" className="mx-2">Facebook</a>
            <a href="#" className="mx-2">Twitter</a>
            <a href="#" className="mx-2">LinkedIn</a>
          </div>
          <p className="mt-4">© 2024 Madii</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
