import { FileText, Gavel, GraduationCap, Building2, MessageCircle, Diff, Download, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Upload Anything',
    desc: 'PDF, DOCX, TXT, or images with OCR. Auto-detects type and extracts clean text.',
  },
  {
    icon: MessageCircle,
    title: 'Chat with Documents',
    desc: 'Ask natural questions powered by embeddings for precise, context-aware answers.',
  },
  {
    icon: Diff,
    title: 'Compare & Track',
    desc: 'Visual diff highlighting changes in clauses or numbers across versions.',
  },
  {
    icon: Download,
    title: 'Export & Share',
    desc: 'Export to PDF/Word and share read-only links with teammates or clients.',
  },
];

const styles = [
  { icon: Gavel, label: 'Legal' },
  { icon: GraduationCap, label: 'Academic' },
  { icon: Building2, label: 'Business' },
  { icon: ShieldCheck, label: 'Risk Flags' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Core features</h2>
          <p className="mt-3 text-gray-600">Everything you need to get instant clarity from complex documents.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center text-sm font-medium text-gray-700 mb-4">Summary styles</div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {styles.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700">
                <s.icon size={16} /> {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
