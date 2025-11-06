import { ArrowRight, FileText, MessagesSquare, ScanText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <ScanText size={14} /> AI Document Intelligence
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Understand any document — in seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Upload contracts, research papers, reports, or invoices. Get instant summaries, answer questions, and compare versions — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#uploader" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-500">
                Upload a document
                <ArrowRight className="ml-2" size={16} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><FileText size={16} /> PDF, DOCX, TXT</div>
              <div className="inline-flex items-center gap-2"><MessagesSquare size={16} /> Chat with files</div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-1 shadow-2xl">
            <div className="h-full w-full rounded-2xl bg-white p-6 grid grid-rows-[auto,1fr]">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-900">Doctract Preview</div>
                <span className="text-xs text-gray-500">MVP</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900">Smart Summary</div>
                  <ul className="mt-2 text-sm text-gray-600 list-disc pl-4 space-y-1">
                    <li>Short, detailed, and action-based views</li>
                    <li>Legal, Academic, Business styles</li>
                    <li>Highlights key terms and risks</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900">Ask Anything</div>
                  <ul className="mt-2 text-sm text-gray-600 list-disc pl-4 space-y-1">
                    <li>"What are the payment terms?"</li>
                    <li>"Summarize section 4 in plain English"</li>
                    <li>Embeddings for accurate answers</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900">Compare & Track</div>
                  <ul className="mt-2 text-sm text-gray-600 list-disc pl-4 space-y-1">
                    <li>Visual diff of versions</li>
                    <li>Track edits and history</li>
                    <li>Shareable read-only links</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900">Export</div>
                  <ul className="mt-2 text-sm text-gray-600 list-disc pl-4 space-y-1">
                    <li>PDF and Word reports</li>
                    <li>Team dashboards</li>
                    <li>Feedback workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
