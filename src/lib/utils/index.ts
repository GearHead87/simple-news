import axios from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Image upload
export const imageUpload = async (image: File) => {
	const formData = new FormData();
	formData.append('image', image);
	const { data } = await axios.post(
		`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
		formData
	);
	return data.data.display_url;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

