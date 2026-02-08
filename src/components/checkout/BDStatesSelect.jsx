"use client";

const BD_DISTRICTS = [
  "Khulna",
  "Bagerhat",
  "Barishal",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Jashore",
];

export default function BDStatesSelect({ value, onChange, name = "state" }) {
  return (
    <div>
      <label className="block text-sm mb-1">States</label>
      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none "
      >
        <option value="">Selects</option>
        {BD_DISTRICTS.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}
