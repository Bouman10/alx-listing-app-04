import { PropertyProps } from "@/interfaces";
import React from "react";
import ReviewSection from "./ReviewSection";

interface PropertyDetail {
	property: PropertyProps;
}

const PropertDetail: React.FC<PropertyDetail> = ({ property }) => {
	return (
		<div>
			<p>{property.name}</p>
			<ReviewSection propertyId={property.id} />
		</div>
	);
};

export default PropertDetail;
