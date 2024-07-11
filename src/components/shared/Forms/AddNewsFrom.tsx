const AddNewsFrom = ({ handleSubmit }) => {
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-[700px] justify-center items-center mx-auto p-4 border rounded shadow-lg"
			>
				<label htmlFor="title" className="mb-2 text-lg font-medium">
					Title
				</label>
				<input
					type="text"
					name="title"
					className="mb-4 p-2 border border-gray-300 rounded w-full"
				/>
				<label htmlFor="content" className="mb-2 text-lg font-medium">
					Content
				</label>
				<textarea
					name="content"
					className="mb-4 p-2 border border-gray-300 rounded w-full h-32"
				/>
				<button
					type="submit"
					className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
				>
					Submit News
				</button>
			</form>
		</div>
	);
};

export default AddNewsFrom;
