import { useState } from "react";
import { Save } from "lucide-react";

export default function EditTestimonial() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    company: "Dubai Investor",
    review: "Excellent service and smooth property buying experience.",
  });

  const handleUpdate = () => {
    console.log(formData);
    alert("Testimonial Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">

      <div className="max-w-4xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Edit Testimonial
          </h1>

          <p className="text-gray-400 mt-2">
            Update client testimonial.
          </p>

        </div>

        <div className="bg-card border border-border rounded-2xl p-8">

          <div className="space-y-6">

            <div>

              <label className="block mb-2 text-sm text-gray-300">
                Client Name
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />

            </div>

            <div>

              <label className="block mb-2 text-sm text-gray-300">
                Company
              </label>

              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />

            </div>

            <div>

              <label className="block mb-2 text-sm text-gray-300">
                Review
              </label>

              <textarea
                rows={6}
                value={formData.review}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    review: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary resize-none"
              />

            </div>

            <button
              onClick={handleUpdate}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              <Save size={18} />
              Update Testimonial
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}