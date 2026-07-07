import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const [search, setSearch] = useState("");

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      company: "Dubai Investor",
      review: "Excellent service and smooth property buying experience.",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      company: "Luxury Homes",
      review: "Highly professional team. Recommended!",
    },
    {
      id: 3,
      name: "David Brown",
      company: "Business Owner",
      review: "Found my dream villa within one week.",
    },
  ]);

  const filteredTestimonials = testimonials.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.review.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmDelete) return;

    setTestimonials((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Testimonials
          </h1>

          <p className="text-gray-400 mt-2">
            Manage client reviews.
          </p>
        </div>

        <Link href="/testimonials/add">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            <Plus size={18} />
            Add Testimonial
          </button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card p-6">

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Testimonial..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
          />
        </div>

        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="text-left p-5">Client</th>
              <th className="text-left">Company</th>
              <th className="text-left">Review</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredTestimonials.length > 0 ? (

              filteredTestimonials.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-border hover:bg-secondary/30 transition"
                >

                  <td className="p-5">{item.name}</td>

                  <td>{item.company}</td>

                  <td>{item.review}</td>

                  <td>
                    <div className="flex justify-center gap-3">

                      <Link href={`/testimonials/edit/${item.id}`}>
                        <button className="text-blue-400 hover:text-blue-300">
                          <Pencil size={18} />
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-400"
                >
                  No Testimonials Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}