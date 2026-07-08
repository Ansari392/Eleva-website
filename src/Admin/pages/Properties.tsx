import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Plus, Pencil, Trash2 } from "lucide-react";

import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Properties() {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
  loadProperties();
}, []);

const loadProperties = async () => {
  const snapshot = await getDocs(collection(db, "properties"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setProperties(data);
};

const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this property?"
  );

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "properties", id));

  loadProperties();
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
                    src={property.image || "/logo.jpeg"}
                    alt={property.title}
                    className="w-20 h-14 rounded-lg object-cover"
                  />
                </td>

                <td>{property.title}</td>

                <td>AED {Number(property.price).toLocaleString()}</td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-green-600 text-xs">
                    {property.featured ? "Featured" : "Normal"}
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