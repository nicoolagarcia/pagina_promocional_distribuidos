import React, { useState } from 'react';

export default function Registro() {
	const [form, setForm] = useState({ nombre: '', email: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch('http://localhost:8000/registro', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form),
		});
		const data = await res.json();
		alert('Registro enviado: ' + JSON.stringify(data));
	};

	return (
		<div>
			<h2>Registro</h2>
			<form onSubmit={handleSubmit}>
				<input
					name="nombre"
					placeholder="Nombre"
					value={form.nombre}
					onChange={handleChange}
					required
				/>
				<input
					name="email"
					placeholder="Correo"
					value={form.email}
					onChange={handleChange}
					type="email"
					required
				/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}
