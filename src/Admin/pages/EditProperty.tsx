import AddProperty from "./AddProperty";

export default function EditProperty() {
  const property = {
    id: 1,
    title: "Luxury Palm Villa",
    price: "$2.4M",
    location: "Dubai Marina",
    area: "5200 sqft",
    bedrooms: "5",
    bathrooms: "6",
    description: "Luxury villa with amazing sea view.",
    status: "Active",
    featured: true,
  };

  return <AddProperty property={property} />;
}