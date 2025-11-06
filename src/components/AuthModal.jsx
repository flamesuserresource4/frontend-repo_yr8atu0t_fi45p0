import { useEffect, useState } from 'react';
import { X, Mail, Lock, User as UserIcon, Loader2 } from 'lucide-react';

export default function AuthModal({ open, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) {
      setEmail('');
      setPassword('');
      setName('');
      setError('');
      setLoading(false);
      setMode('login');
    }
  }, [open]);

  if (!open) return null;

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let token;
      if (mode === 'signup') {
        const res = await fetch(`${backend}/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Sign up failed');
        token = data.access_token;
      } else {
        const form = new URLSearchParams();
        form.append('username', email);
        form.append('password', password);
        const res = await fetch(`${backend}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: form.toString(),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Login failed');
        token = data.access_token;
      }

      localStorage.setItem('token', token);
      // fetch profile
      const profileRes = await fetch(`${backend}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const profile = await profileRes.json();
      onAuthSuccess?.(profile);
      onClose?.();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button onClick={onClose} className="absolute right-3 top-3 rounded p-1 text-gray-500 hover:bg-gray-100">
          <X size={18} />
        </button>
        <div className="mb-4 flex justify-center gap-2">
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium ${mode==='login' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMode('login')}
          >
            Log in
          </button>
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium ${mode==='signup' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMode('signup')}
          >
            Sign up
          </button>
        </div>
        <h3 className="mb-1 text-center text-xl font-semibold text-gray-900">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h3>
        <p className="mb-6 text-center text-sm text-gray-600">Access Doctract with your email and password.</p>

        <form onSubmit={handleSubmit} className="grid gap-3">
          {mode === 'signup' && (
            <div className="grid gap-1">
              <label className="text-sm text-gray-700">Name</label>
              <div className="flex items-center rounded-md border border-gray-300 bg-white px-3">
                <UserIcon size={16} className="text-gray-500" />
                <input
                  type="text"
                  className="ml-2 h-10 w-full outline-none"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Email</label>
            <div className="flex items-center rounded-md border border-gray-300 bg-white px-3">
              <Mail size={16} className="text-gray-500" />
              <input
                type="email"
                className="ml-2 h-10 w-full outline-none"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Password</label>
            <div className="flex items-center rounded-md border border-gray-300 bg-white px-3">
              <Lock size={16} className="text-gray-500" />
              <input
                type="password"
                className="ml-2 h-10 w-full outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <div className="mt-1 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
          >
            {loading ? (<><Loader2 className="mr-2 animate-spin" size={16} /> Processing...</>) : (mode === 'login' ? 'Log in' : 'Create account')}
          </button>
        </form>
      </div>
    </div>
  );
}
