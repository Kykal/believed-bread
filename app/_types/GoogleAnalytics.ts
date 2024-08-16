type GoogleAnalytics = {
	vistasPagina: {
		fecha: string;
		vistas: number;
	}[];
	sesiones: {
		fecha: string;
		sesiones: number;
		tasaRebote: number;
	}[];
	demografía: {
		edad: {
			rango: string;
			porcentaje: number;
		}[];
		género: {
			tipo: string;
			porcentaje: number;
		}[];
	};
};


export default GoogleAnalytics;