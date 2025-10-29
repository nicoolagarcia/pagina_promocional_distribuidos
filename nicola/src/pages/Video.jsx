import React from 'react';

export default function Video() {
	return (
		<div>
			<h2>Video Promocional</h2>
			<video width="640" height="360" controls>
				<source src="/video.mp4" type="video/mp4" />
				Tu navegador no soporta el formato de video.
			</video>
		</div>
	);
}
