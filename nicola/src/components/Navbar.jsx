import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const linkStyle = {
		margin: '0 15px',
		textDecoration: 'none',
		color: '#333',
		fontWeight: 'bold',
	};

	return (
		<nav
			style={{
				backgroundColor: '#f4f4f4',
				padding: '1rem',
				display: 'flex',
				justifyContent: 'center',
				borderBottom: '2px solid #ddd',
			}}
		>
			<Link to="/registro" style={linkStyle}>
				Registro
			</Link>
			<Link to="/terminos" style={linkStyle}>
				Términos
			</Link>
			<Link to="/video" style={linkStyle}>
				Video
			</Link>
			<Link to="/instalacion" style={linkStyle}>
				Instalación
			</Link>
			<Link to="/uso" style={linkStyle}>
				Uso
			</Link>
		</nav>
	);
}
