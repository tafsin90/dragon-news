import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-slate-50 text-slate-900">
      <p className="m-0 text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-tight text-slate-900">404</p>
      <h1 className="mt-4 mb-2 text-4xl font-semibold sm:text-5xl">Page not found</h1>
      <p className="max-w-xl mx-auto mb-8 text-base text-slate-600 sm:text-lg">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
