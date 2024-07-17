import { useParams } from 'react-router-dom';
import DetailsNewsContainer from '../../containers/DetailsNewsContainer';

const DetailsNewsPage = () => {
	const { id } = useParams();

	return (
		<div>
			<DetailsNewsContainer id={id} />
		</div>
	);
};

export default DetailsNewsPage;
