export default function AuthButton({ text, type = "submit" }) {
  return (
    <button
      type={type}
      className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-all"
    >
      {text}
    </button>
  );
}
