import { useState } from "react";
import { Save } from "lucide-react";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    status: "Active",
    featured: false,
  });

  const handleSave = () => {
    console.log(formData);
    alert("Property Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">Add Property</h1>

          <p className="text-gray-400 mt-2">
            Create a new luxury property listing.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Property Title
              </label>

              <input
                type="text"
                placeholder="Luxury Palm Villa"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Price
              </label>

              <input
                type="text"
                placeholder="$2.4M"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Location
              </label>

              <input
                type="text"
                placeholder="Dubai Marina"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Area
              </label>

              <input
                type="text"
                placeholder="5200 sqft"
                value={formData.area}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    area: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Bedrooms
              </label>

              <input
                type="number"
                placeholder="5"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bedrooms: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Bathrooms
              </label>

              <input
                type="number"
                placeholder="6"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bathrooms: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm text-gray-300">
              Property Image
            </label>

            <input
              type="file"
              className="w-full rounded-xl bg-background border border-border px-4 py-3"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm text-gray-300">
              Description
            </label>

            <textarea
              rows={6}
              placeholder="Write complete property description..."
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Status
              </label>

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
              </select>
            </div>

            <div className="flex items-center mt-8">

              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    featured: e.target.checked,
                  })
                }
                className="mr-3 w-5 h-5"
              />

              <span>Featured Property</span>

            </div>

          </div>

          <button
            onClick={handleSave}
            className="mt-10 flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            <Save size={18} />
            Save Property
          </button>

        </div>

      </div>
    </div>
  );
}