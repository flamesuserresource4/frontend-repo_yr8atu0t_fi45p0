export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-8 text-white shadow-lg">
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Ship your document intelligence workflow today</h3>
              <p className="mt-2 text-indigo-100">Start free, upgrade when you need more power. No credit card required.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="#uploader" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">
                Try it now
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-indigo-800/40 px-5 py-3 font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-indigo-800/60">
                See pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
