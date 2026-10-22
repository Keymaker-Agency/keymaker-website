import Image from "next/image";
import RequestForm from "@/components/RequestForm";

export const metadata = { title: "Start a project" };

export default function Start() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-36 pb-24 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="lg:sticky lg:top-28 self-start">
        <p className="eyebrow text-peach">Start a project</p>
        <h1 className="display text-5xl sm:text-6xl mt-5">Tell us what slows your desk down.</h1>
        <p className="text-muted text-lg mt-6 leading-relaxed">
          Your specialism, how many recruiters, how long a shortlist takes today. Our front desk reads every request within
          minutes and hands it to the right person. A person on our team reviews the reply before it reaches you.
        </p>
        <div className="photo relative aspect-[16/10] mt-10 hidden lg:block">
          <Image src="/img/approve.jpg" alt="A team lead reviewing a draft before approving it" fill sizes="40vw" className="object-cover" />
        </div>
      </div>
      <div className="rounded-lg border border-line bg-forest-2 p-6 sm:p-9">
        <RequestForm />
      </div>
    </div>
  );
}
