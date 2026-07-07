import { Plus, Pencil, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
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
  ];

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
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">
            <Plus size={18} />
            Add Testimonial
          </button>
        </Link>

      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">

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

            {testimonials.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border hover:bg-secondary/30"
              >

                <td className="p-5">{item.name}</td>

                <td>{item.company}</td>

                <td>{item.review}</td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="text-blue-400">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-400">
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