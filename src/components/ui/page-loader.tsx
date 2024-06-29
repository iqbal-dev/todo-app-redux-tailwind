export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 size-10 mb-4"></div>
      <p className="text-xl text-indigo-600">Loading...</p>
    </div>
  );
}
