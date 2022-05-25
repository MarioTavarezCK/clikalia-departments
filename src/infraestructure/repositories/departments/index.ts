import Departments from '../../../domain/entities/departments';
import { DepartmentsEntity } from '../../../domain/interfaces/departments';
import Http from '../../http';

class DepartmentsRepository implements DepartmentsEntity {
	private static instance: DepartmentsRepository;
	private constructor() {}

	public static getInstance(): DepartmentsRepository {
		if (!DepartmentsRepository.instance) {
			DepartmentsRepository.instance = new DepartmentsRepository();
		}

		return DepartmentsRepository.instance;
	}

	public async getAll(): Promise<Departments[]> {
		const http: Http = Http.getInstance();
		const departments: Departments[] = await http.get<Departments[]>(
			`${process.env.NEXT_API_URL}/departments`
		);
		return departments;
	}

	public async create(department: Departments): Promise<Departments> {
		const http: Http = Http.getInstance();
		const id = await http.post<Departments>(
			`${process.env.NEXT_API_URL}/departments`,
			department
		);
		department._id = id.toString();
		return department;
	}

	public async update(department: Departments): Promise<boolean> {
		const http: Http = Http.getInstance();

		const response = await http.put<boolean>(
			`${process.env.NEXT_API_URL}/departments`,
			department
		);
		return response;
	}

	public async delete(_id: string): Promise<boolean> {
		const http: Http = Http.getInstance();

		const response = await http.delete<boolean>(
			`${process.env.NEXT_API_URL}/departments/${_id}`
		);

		return response;
	}
}

export default DepartmentsRepository;
