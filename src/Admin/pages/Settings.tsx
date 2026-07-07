import { useState } from "react";
import { Save } from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: "ELEVA Properties",
    email: "info@elevaproperties.com",
    phone: "+92 300 1234567",
    whatsapp: "+92 300 1234567",
    address: "Islamabad, Pakistan",

    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",

    website: "https://elevaproperties.com",
  });

  const handleSave = () => {
    console.log(settings);
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Manage company information and social media.
          </p>

        </div>

        <div className="bg-card border border-border rounded-2xl p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">Company Name</label>

              <input
                value={settings.companyName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    companyName: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>

              <input
                value={settings.email}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2">Phone</label>

              <input
                value={settings.phone}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    phone: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2">WhatsApp</label>

              <input
                value={settings.whatsapp}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    whatsapp: e.target.value,
                  })
                }
                className="w-full rounded-xl bg-background border border-border px-4 py-3"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2">
              Office Address
            </label>

            <textarea
              rows={3}
              value={settings.address}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  address: e.target.value,
                })
              }
              className="w-full rounded-xl bg-background border border-border px-4 py-3"
            />

          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">
            Social Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              placeholder="Facebook URL"
              value={settings.facebook}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  facebook: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

            <input
              placeholder="Instagram URL"
              value={settings.instagram}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  instagram: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

            <input
              placeholder="LinkedIn URL"
              value={settings.linkedin}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  linkedin: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

            <input
              placeholder="YouTube URL"
              value={settings.youtube}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  youtube: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

            <input
              placeholder="TikTok URL"
              value={settings.tiktok}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  tiktok: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

            <input
              placeholder="Website URL"
              value={settings.website}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  website: e.target.value,
                })
              }
              className="rounded-xl bg-background border border-border px-4 py-3"
            />

          </div>

          <button
            onClick={handleSave}
            className="mt-10 flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            <Save size={18} />
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}