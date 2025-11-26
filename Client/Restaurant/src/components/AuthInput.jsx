import * as Label from "@radix-ui/react-label";

export default function AuthInput({ label, type="text", value, onChange, name, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <Label.Root className="text-sm font-medium">{label}</Label.Root>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
