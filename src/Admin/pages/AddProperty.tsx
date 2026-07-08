import { useLocation } from "wouter";
import { db } from "@/firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Save } from "lucide-react";

type Property = {
  id?: string;
  title: string;
  price: string;
  location: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  description: string;
  status: string;
  featured: boolean;
};

interface AddPropertyProps {
  property?: Property;
}

export default function AddProperty({
  property,
}: AddPropertyProps) {

  const [, navigate] = useLocation();

  const [formData, setFormData] = useState<Property>({
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

  useEffect(() => {
    if (property) {
      setFormData(property);
    }
  }, [property]);

  const handleSave = async () => {
  if (
    !formData.title ||
    !formData.price ||
    !formData.location
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    await addDoc(collection(db, "properties"), {
      title: formData.title,
      price: Number(formData.price),
      location: formData.location,
      area: Number(formData.area),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      description: formData.description,
      status: formData.status,
      featured: formData.featured,
      image:
        "https://picsum.photos/600/400?random=" +
        Math.floor(Math.random() * 1000),
      createdAt: new Date(),
    });

    alert("Property Saved Successfully!");

    setFormData({
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

    navigate("/properties");

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};
  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            {property ? "Edit Property" : "Add Property"}
          </h1>

          <p className="text-gray-400 mt-2">
          {property
          ? "Update your luxury property listing."
          : "Create a new luxury property listing."}
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
              {property && (
              <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">
          Current Image
        </p>

        <img
        src="/logo.jpeg"
        alt="Property"
        className="w-48 rounded-xl border border-border"
        />
      </div>
        )}
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

              <span className="text-gray-300">
                 Featured Property
              </span>

            </div>

          </div>

          <button
            onClick={handleSave}
            className="mt-10 flex items-center justify-center gap-2 w-full md:w-fit px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            <Save size={18} />
            {property ? "Update Property" : "Save Property"}
          </button>

        </div>

      </div>
    </div>
  );
}