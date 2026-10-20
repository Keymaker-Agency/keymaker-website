import Link from "next/link";
export const metadata = { title: "Request received" };

export default async function Received({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Received</p>
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight mt-4">Thank you - it&apos;s with us.</h1>
      {ref && <p className="mt-6 font-mono text-lg">Your reference: <span className="text-brass">{ref}</span></p>}
      <ol className="mt-10 space-y-3 text-muted">
        <li>1. Our front desk is reading it now and handing it to the right department.</li>
        <li>2. The department drafts a reply.</li>
        <li>3. A person on our team reviews it and sends it to you by email.</li>
      </ol>
      <Link href="/" className="inline-block mt-12 rounded-full border border-line px-6 py-3 hover:border-brass">Back to Keymaker</Link>
    </div>
  );
}
