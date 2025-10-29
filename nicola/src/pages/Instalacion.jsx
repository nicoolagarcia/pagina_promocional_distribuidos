import React from 'react';

export default function Instalacion() {
	return (
		<div>
			<h2>Instrucciones de Instalación</h2>
			<ol>
				<li>Clona el repositorio del proyecto.</li>
				<li>
					Ejecuta <code>python -m venv venv</code> y activa el entorno virtual.
				</li>
				<li>
					Instala dependencias con <code>pip install -r requirements.txt</code>.
				</li>
				<li>
					Ejecuta el backend con <code>uvicorn main:app --reload</code>.
				</li>
				<li>
					En la carpeta <code>frontend</code>, corre <code>npm install</code> y
					luego <code>npm run dev</code>.
				</li>
			</ol>
		</div>
	);
}
