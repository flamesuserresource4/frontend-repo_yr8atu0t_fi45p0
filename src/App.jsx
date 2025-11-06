import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // try auto login via token
    const token = localStorage.getItem('token');
    const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    if (token) {
      fetch(`${backend}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => r.ok ? r.json() : null)
        .then((data) => { if (data) setProfile(data); })
        .catch(() => {});
    }
  }, []);

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
          {profile ? (
            <div className="mt-6 text-sm text-gray-700">Signed in as <span className="font-medium">{profile.email}</span></div>
          ) : (
            <div className="mt-6">
              <button onClick={() => setAuthOpen(true)} className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Log in / Sign up</button>
            </div>
          )}
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onAuthSuccess={setProfile} />
    </div>
  );
}

export default App;
