import RequestForm from "@/components/RequestForm";
export const metadata = { title: "Start a project" };

export default function Start() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Start a project</p>
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight mt-4">Tell us what you need.</h1>
      <p className="text-muted text-lg mt-5">
        Our front desk reads every request within minutes and hands it to the right department. A person on our team
        reviews the reply before it reaches you.
      </p>
      <RequestForm />
    </div>
  );
}
