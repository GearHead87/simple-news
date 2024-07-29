import { useSpeech } from 'react-text-to-speech';

interface AudioPlayerProps {
	content: string;
}

export default function AudioPlayer({ content }: AudioPlayerProps) {
	const {
		// Text, // Component that returns the modified text property
		speechStatus, // String that stores current speech status
		// isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
		start, // Function to start the speech or put it in queue
		pause, // Function to pause the speech
		stop, // Function to stop the speech or remove it from queue
	} = useSpeech({ text: content });

	return (
		<div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
			{/* <Text /> */}
			<div className="flex gap-2">
				{speechStatus !== 'started' ? (
					<button className="btn btn-accent" onClick={start}>
						Start
					</button>
				) : (
					<button className="btn btn-accent" onClick={pause}>
						Pause
					</button>
				)}
				<button className="btn bg-red-400 text-white" onClick={stop}>
					Stop
				</button>
			</div>
		</div>
	);
}
