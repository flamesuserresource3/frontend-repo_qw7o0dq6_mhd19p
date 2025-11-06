export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, scalable pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Scale as you add tenants and employees.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-medium text-indigo-700">Starter</p>
            <p className="mt-2 text-4xl font-semibold">$0<span className="text-base text-gray-500">/mo</span></p>
            <p className="mt-2 text-sm text-gray-600">Up to 2 tenants, 25 employees</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Core HR & docs</li>
              <li>Attendance</li>
              <li>Email support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2 font-medium hover:bg-gray-50">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
            <p className="text-sm font-medium text-indigo-700">Growth</p>
            <p className="mt-2 text-4xl font-semibold">$199<span className="text-base text-gray-500">/mo</span></p>
            <p className="mt-2 text-sm text-gray-600">Up to 10 tenants, 250 employees</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Everything in Starter</li>
              <li>Payroll & benefits</li>
              <li>SSO & audit logs</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:bg-black">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-medium text-indigo-700">Enterprise</p>
            <p className="mt-2 text-4xl font-semibold">Custom</p>
            <p className="mt-2 text-sm text-gray-600">Unlimited tenants & employees</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Dedicated cluster</li>
              <li>SCIM provisioning</li>
              <li>24/7 priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2 font-medium hover:bg-gray-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
