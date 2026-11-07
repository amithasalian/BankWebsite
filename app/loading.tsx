export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bank-ivory">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-bank-navy border-t-bank-gold" />
        <p className="mt-4 text-sm font-medium text-bank-navy">Loading...</p>
      </div>
    </div>
  );
}
