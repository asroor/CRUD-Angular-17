interface IID {
	id?: string
}
export interface ITodos extends IID {
	userId: number
	todo: string;
	completed: boolean,
}