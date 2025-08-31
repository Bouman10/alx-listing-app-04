import React from "react";
import { PropertyProps } from "@/interfaces";

interface Property {
	property: PropertyProps;
}

const PropertyCard: React.FC<Property> = ({ property }) => {
	return <div>{property.name}</div>;
};

export default PropertyCard;
