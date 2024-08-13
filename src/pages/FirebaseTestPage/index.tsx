import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
	ref as StorageRef,
	deleteObject,
	getDownloadURL,
	getMetadata,
	listAll,
	uploadBytes,
} from 'firebase/storage';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { auth, storage, database } from '../../lib/config/firebaseConfig';
import { ref as DatabaseRef, push } from 'firebase/database';

const FirebaseTestPage = () => {
	const { user } = useAuth();
	const [itemList, setItemList] = useState([]);

	const handleSignIn = async () => {
		const res = await signInWithEmailAndPassword(auth, 'hosan@gmail.com', '123456');
		console.log(res);
	};
	const handleSignout = async () => {
		const res = await signOut(auth);
		console.log(res);
	};

	const handleFetch = async () => {
		const listRef = StorageRef(storage, '/images');
		listAll(listRef)
			.then(async (res) => {
				const itemsWithUrls = await Promise.all(
					res.items.map(async (item) => {
						const url = await getDownloadURL(item);
						return { name: item.name, url, fullPath: item.fullPath };
					})
				);
				setItemList(itemsWithUrls);
			})
			.catch((error) => {
				console.error('Error fetching items:', error);
			});
	};

	const handleUpload = (e) => {
		e.preventDefault();
		const form = e.target;
		const img = form.image.files[0];
		console.log(img);

		const fileName = `${img.name}_${Date.now()}`;
		const fileRef = StorageRef(storage, `/images/${fileName}`);
		uploadBytes(fileRef, img).then((res) => {
			console.log(res);
		});
	};

	const handleDelete = async (fullPath: string) => {
		const itemRef = StorageRef(storage, fullPath);
		const res = await deleteObject(itemRef);
		console.log(res);
	};

	const handleMetaData = async (fullPath: string) => {
		const itemRef = StorageRef(storage, fullPath);
		const res = await getMetadata(itemRef);
		console.log(res);
	};

	const handleWrite = () => {
		push(DatabaseRef(database, 'tempdata/'), {
			title: 'hosan',
			content: '1',
		});
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
			<button onClick={handleWrite} className="btn">
				write Data to database
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

export default FirebaseTestPage;
