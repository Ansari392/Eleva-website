import { useState } from "react";
import { Eye, Trash2, X } from "lucide-react";

export default function ContactLeads() {
  const [leads, setLeads] = useState([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-210-1111",
    status: "New",
    property: "Luxury Palm Villa",
    message: "I want to schedule a property viewing.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+44 7895 123456",
    status: "Called",
    property: "Beach Mansion",
    message: "Can I get more details about this property?",
  },
  {
    id: 3,
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 555-998-2211",
    status: "Closed",
    property: "Downtown Apartment",
    message: "I'm ready to buy. Please contact me.",
  },
]);

const [selectedLead, setSelectedLead] = useState<any>(null);

const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const filteredLeads = leads.filter((lead) => {
  const matchesSearch =
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase()) ||
    lead.phone.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" || lead.status === statusFilter;

  return matchesSearch && matchesStatus;
});


const handleDelete = (id: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  setLeads((prev) =>
    prev.filter((lead) => lead.id !== id)
  );
};

  return (
    <div className="text-white">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Contact Leads
        </h1>

        <p className="text-gray-400 mt-2">
          Manage all incoming client inquiries.
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">

        <div className="mb-6 flex flex-col md:flex-row gap-4">

  <input
    type="text"
    placeholder="Search Lead..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-96 rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-primary"
  >
    <option value="All">All</option>
    <option value="New">New</option>
    <option value="Called">Called</option>
    <option value="Closed">Closed</option>
  </select>

</div>

        <table className="w-full">

          <thead className="bg-secondary">

            <tr>

              <th className="text-left p-5">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredLeads.map((lead) => (

              <tr
                key={lead.id}
                className="border-t border-border hover:bg-secondary/30"
              >

                <td className="p-5">{lead.name}</td>

                <td>{lead.email}</td>

                <td>{lead.phone}</td>

                <td>

                  <span className="px-3 py-1 rounded-full bg-blue-600 text-xs">

                    {lead.status}

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-4">

                    <button
                        onClick={() => setSelectedLead(lead)}
                        className="text-blue-400 hover:text-blue-300"
                        >
                        <Eye size={18} />
                    </button>

                    <button
                        onClick={() => handleDelete(lead.id)}
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
        {selectedLead && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-lg relative">

      <button
        onClick={() => setSelectedLead(null)}
        className="absolute right-5 top-5 text-gray-400 hover:text-white"
      >
        <X size={22} />
      </button>

      <h2 className="text-3xl font-bold mb-6">
        Lead Details
      </h2>

      <div className="space-y-4">

        <p><strong>Name:</strong> {selectedLead.name}</p>

        <p><strong>Email:</strong> {selectedLead.email}</p>

        <p><strong>Phone:</strong> {selectedLead.phone}</p>

        <p><strong>Interested Property:</strong> {selectedLead.property}</p>

        <p><strong>Status:</strong> {selectedLead.status}</p>

        <div>
          <strong>Message:</strong>

          <div className="mt-2 bg-background rounded-xl p-4 border border-border">
            {selectedLead.message}
          </div>
        </div>

      </div>

    </div>

  </div>
)}
    </div>   
  );
}