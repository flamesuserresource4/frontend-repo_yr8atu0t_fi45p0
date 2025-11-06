import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Doctract. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a className="text-gray-600 hover:text-gray-900" href="#use-cases">Use Cases</a>
              <a className="text-gray-600 hover:text-gray-900" href="#pricing">Pricing</a>
              <a className="text-gray-600 hover:text-gray-900" href="#">Privacy</a>
              <a className="text-gray-600 hover:text-gray-900" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
