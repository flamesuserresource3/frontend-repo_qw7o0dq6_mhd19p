import { Building2, Users, ShieldCheck, Clock, Globe2, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Tenant Management',
    desc: 'Isolated data per tenant with role-based access, custom domains, and branding.',
  },
  {
    icon: Users,
    title: 'People Ops',
    desc: 'Onboarding, org charts, documents, and self-serve employee portal.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'SSO/SAML, SCIM provisioning, audit logs, and fine-grained permissions.',
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    desc: 'Shifts, timesheets, geofenced clock-ins, and overtime policies.',
  },
  {
    icon: Globe2,
    title: 'Global Payroll',
    desc: 'Multi-country payroll with taxes, benefits, and compliance built-in.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Cross-tenant dashboards, cohort insights, and KPI tracking.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Built for modern multi-tenant HR</h2>
          <p className="mt-3 text-gray-600">Everything you need to operate HR across tenants with security and scale.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
