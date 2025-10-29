import React from 'react';
function Terms() {
	const [terms, setTerms] = React.useState('');
	React.useEffect(() => {
		fetch('http://localhost:8000/api/terms')
			.then((r) => r.json())
			.then((d) => setTerms(d.terms));
	}, []);
	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Términos y Condiciones</h2>
			<pre className="whitespace-pre-wrap">{terms}</pre>
		</div>
	);
}

function Install() {
	const [text, setText] = React.useState('');
	React.useEffect(() => {
		fetch('http://localhost:8000/api/install')
			.then((r) => r.json())
			.then((d) => setText(d.install));
	}, []);
	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">
				Instrucciones de instalación
			</h2>
			<pre className="whitespace-pre-wrap">{text}</pre>
		</div>
	);
}

function Usage() {
	const [text, setText] = React.useState('');
	React.useEffect(() => {
		fetch('http://localhost:8000/api/usage')
			.then((r) => r.json())
			.then((d) => setText(d.usage));
	}, []);
	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Instrucciones de uso</h2>
			<pre className="whitespace-pre-wrap">{text}</pre>
		</div>
	);
}

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Registro from './pages/Registro.jsx';
import Terminos from './pages/Terminos.jsx';
import Video from './pages/Video.jsx';
import Instalacion from './pages/Instalacion.jsx';
import Uso from './pages/Uso.jsx';

function App() {
	return (
		<>
			<Navbar />
			<div style={{ padding: '2rem' }}>
				<Routes>
					<Route path="/" element={<Registro />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/terminos" element={<Terminos />} />
					<Route path="/video" element={<Video />} />
					<Route path="/instalacion" element={<Instalacion />} />
					<Route path="/uso" element={<Uso />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
