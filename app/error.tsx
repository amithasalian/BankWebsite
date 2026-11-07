'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bank-ivory px-4">
      <div className="card-surface max-w-md p-8 text-center">
        <h2 className="text-2xl font-bold text-bank-navy">Something went wrong</h2>
        <p className="mt-3 text-bank-muted">
          We could not load this page. Please try again.
        </p>
        <button className="btn-primary mt-6" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
