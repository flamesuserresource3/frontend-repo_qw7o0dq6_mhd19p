import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Tenant Pulse</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
              <User size={16} />
              Sign in
            </button>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">
              Get started
            </a>
          </div>

          <button
            className="md:hidden rounded-lg border border-gray-200 p-2 hover:bg-gray-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-black/5">
            <nav className="flex flex-col gap-3">
              <a href="#features" className="px-2 py-2 rounded-lg hover:bg-gray-50">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded-lg hover:bg-gray-50">Pricing</a>
              <a href="#contact" className="px-2 py-2 rounded-lg hover:bg-gray-50">Contact</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
                  <User size={16} />
                  Sign in
                </button>
                <a href="#pricing" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">
                  Get started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
