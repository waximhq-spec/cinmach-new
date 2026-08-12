import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-black-primary grain min-h-screen flex items-center">
      <div className="container-cin py-24 text-center flex flex-col items-center">
        <span className="text-mono text-red mb-6">(Error 404)</span>
        <h1 className="text-mega text-white-primary">
          Lost the <span className="text-red">frame.</span>
        </h1>
        <p className="text-lead text-gray-light mt-8 max-w-md">
          The page you're looking for has been moved, renamed, or never existed. Let's get you back on track.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/work" className="btn btn-outline-dark">
            View Our Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
