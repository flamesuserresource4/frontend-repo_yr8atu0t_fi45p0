import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started',
    features: [
      '3 documents / month',
      'Basic summaries',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    tagline: 'For individuals',
    features: [
      'Unlimited uploads',
      'Chat with documents',
      'Compare versions',
      'Priority support',
    ],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$49',
    tagline: 'For teams',
    features: [
      'Team workspaces',
      'Advanced exports',
      'Shared dashboards',
      'SAML/SSO (coming soon)',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Choose a plan that scales with you.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${plan.highlighted ? 'border-indigo-600 shadow-lg' : 'border-gray-200'} bg-white p-6 flex flex-col`}
            >
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <span className="text-3xl font-bold text-gray-900">{plan.price}<span className="text-base font-normal text-gray-500">/mo</span></span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{plan.tagline}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white"><Check size={14} /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-8 w-full rounded-md px-4 py-2 font-semibold ${plan.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
