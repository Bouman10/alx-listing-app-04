export interface PropertyProps {
	name: string;
	id: number;
	address: {
		state: string;
		city: string;
		country: string;
	};
	rating: number;
	category: Array<string>;
	price: number;
	offers: {
		bed: string;
		shower: string;
		occupants: string;
	};
	image: string;
	discount?: string;
}
