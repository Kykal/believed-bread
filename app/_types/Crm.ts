export type Lead = {
	nombre: string;
	costoAdquisición: number;
	valorDeVida: number;
}

type Crm = {
	leads: Lead[],
	tasaConversión: number;
};


export default Crm;
