import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 mb-4">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Multi-tenant HRMS Platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Run people operations at scale with Tenant Pulse
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Centralize HR, payroll, attendance, and performance across all your tenants in one secure, scalable platform.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 font-medium hover:bg-black">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 font-medium hover:bg-gray-50">
                See features
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                'Tenant isolation & RBAC',
                'SSO & SCIM provisioning',
                'Payroll & compliance automation',
                'Global time & attendance',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="relative rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Dashboard preview"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white pointer-events-none">
                <p className="text-sm">Clean, enterprise-ready dashboard for cross-tenant visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
