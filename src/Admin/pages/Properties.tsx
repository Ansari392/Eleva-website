import { useState } from "react";
import { Link } from "wouter";
import {
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function Properties() {
  const [properties, setProperties] = useState([
  {
    id: 1,
    image: "/logo.jpeg",
    title: "Luxury Palm Villa",
    price: "$2.4M",
    status: "Active",
  },
  {
    id: 2,
    image: "/logo.jpeg",
    title: "Downtown Apartment",
    price: "$980K",
    status: "Active",
  },
  {
    id: 3,
    image: "/logo.jpeg",
    title: "Beach Mansion",
    price: "$5.2M",
    status: "Draft",
  },
]);

const handleDelete = (id: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this property?"
  );

  if (!confirmDelete) return;

  setProperties((prev) =>
    prev.filter((property) => property.id !== id)
  );
};

  return (
    <div className="text-white">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Properties
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all your real estate listings
          </p>
        </div>

        <Link href="/properties/add">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            <Plus size={18} />
            Add Property
          </button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="text-left p-5">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="border-t border-border hover:bg-secondary/30 transition"
              >
                <td className="p-5">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-20 h-14 rounded-lg object-cover"
                  />
                </td>

                <td>{property.title}</td>

                <td>{property.price}</td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-green-600 text-xs">
                    {property.status}
                  </span>
                </td>

                <td>
                  <div className="flex items-center justify-center gap-3">
                  <Link href={`/properties/edit/${property.id}`}>
                    <button className="text-blue-400 hover:text-blue-300">
                    <Pencil size={18} />
                    </button>
                  </Link>

                    <button
                      onClick={() => handleDelete(property.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                    <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}