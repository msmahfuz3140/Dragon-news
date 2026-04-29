"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CategoryDropdown = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = searchParams.get("category") || "";

  return (
    <select
      className="w-full rounded-lg px-3 py-2 text-gray-700 border"
      value={active}
      onChange={(e) => {
        router.push(`/?category=${e.target.value}`);
      }}
    >
      {categories.map((item) => (
        <option key={item.category_id} value={item.category_id}>
          {item.category_name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;