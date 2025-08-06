import React from "react";

interface Property {
  id: string;
  title?: string;
  price?: number;
  rating?: number;
  category?: string;
  location?: string;
  [key: string]: string | number | boolean | undefined;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property?.title || "Property Details"}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Property details will be displayed here.</p>
        <pre className="mt-4 text-sm">{JSON.stringify(property, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PropertyDetail;