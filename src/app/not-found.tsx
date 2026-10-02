import Link from "next/link";
import { Grain, Slashes } from "@/components/Decor";

export default function NotFound() {
  return (
    <section className="relative bg-ink2 text-white overflow-hidden min-h-[100svh] flex items-center">
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.1} height={700} />
      <div className="relative max-w-brand mx-auto px-6 pt-28 pb-24 w-full text-center">
        <div className="text-[96px] sm:text-[140px] font-extrabold leading-none tracking-[-0.04em] grad-text">404</div>
        <h1 className="text-2xl sm:text-4xl font-extrabold mt-2 mb-3">This step doesn&apos;t exist. Yet.</h1>
        <p className="text-white/60 max-w-md mx-auto mb-8">The page you&apos;re looking for moved or never existed. Let&apos;s get you back on the path.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-grad tap inline-flex justify-center px-7 py-4 text-white font-extrabold rounded-full text-[15px]">Back to home</Link>
          <Link href="/courses" className="btn-ghost-dark tap inline-flex justify-center px-7 py-4 text-white font-bold rounded-full text-[15px]">Explore courses</Link>
        </div>
      </div>
    </section>
  );
}
