import { Storage } from '@antmorelabs-packages/tggt-firebase';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const PackageTestPage = () => {
	const { user, signout, signin } = useAuth();
	const storage = Storage(import.meta.env.VITE_API_STORAGEBUCKET, user!);
	const [itemList, setItemList] = useState([]);

	const handleSignIn = async () => {
		const res = signin('hosan@gmail.com', '123456', () => {});
		console.log(res);
	};
	const handleSignout = async () => {
		const res = signout(() => {});
		console.log(res);
	};

	const handleFetch = async () => {
		const path = 'images/';
		storage
			.listAllFiles(path)
			.then(async (res) => {
				console.log(res);
				const itemsWithUrls = await Promise.all(
					res.map(async (item) => {
						console.log(item);
						const url = await storage.getFileDownloadURL(item?.name);
						return { name: item.name, url, fullPath: item.name };
					})
				);
				setItemList(itemsWithUrls);
			})
			.catch((err) => {
				console.log('Error fetching items:', err);
			});
	};

	const handleUpload = (e) => {
		e.preventDefault();
		const form = e.target;
		const img = form.image.files[0];
		console.log(img);

		const fileName = `${img.name}_${Date.now()}`;

		storage
			.uploadFile(`images/${fileName}`, img)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = async (fullPath: string) => {
		const res = await storage.deleteFile(fullPath);
		console.log(res);
	};

	const handleMetaData = async (fullPath: string) => {
		const res = await storage.getFileMetadata(fullPath);
		console.log(res);
	};

	return (
		<div>
			<button onClick={handleSignIn} className="btn">
				signin
			</button>
			<button onClick={handleSignout} className="btn">
				sign Out
			</button>
			<button onClick={handleFetch} className="btn">
				fetch Data from storage
			</button>
			<div className="flex flex-col gap-10 justify-center item-center">
				{itemList && itemList.length > 0 ? (
					itemList.map((item, index) => (
						<div key={index} className="item flex justify-center items-center gap-4">
							<p>{item.name}</p>
							<img
								src={item.url}
								alt={item.name}
								className="image-preview size-20 object-cover"
							/>
							<button
								onClick={() => handleDelete(item.fullPath)}
								className="btn text-white bg-red-400"
							>
								Delete
							</button>
							<button
								onClick={() => handleMetaData(item.fullPath)}
								className="btn text-white bg-red-400"
							>
								getMetaData
							</button>
						</div>
					))
				) : (
					<p className="text-white">No items found</p>
				)}
			</div>
			<form onSubmit={handleUpload}>
				<input type="file" name="image" id="image" />
				<button className="btn" type="submit">
					uploadFile
				</button>
			</form>
		</div>
	);
};

export default PackageTestPage;
