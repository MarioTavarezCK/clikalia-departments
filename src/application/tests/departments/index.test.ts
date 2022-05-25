// Entities
import Departments from '@/domain/entities/departments';
// Controllers
import DepartmentsController from '@/infraestructure/controllers/departments';
// Jest
import '@testing-library/jest-dom';

describe('[Departments] unit tests', () => {
	const env = process.env;
	const departmentsController: DepartmentsController =
		DepartmentsController.getInstance();

	beforeEach(() => {
		jest.resetModules();
		env.NEXT_API_URL = 'http://localhost:3001';
	});
	it('Render Departments', async () => {
		expect(true).toBe(true);
	});
	it('When the user enters, it should show the departments', async () => {
		const departments: Departments[] = await departmentsController.getAll();
		expect(departments.length).toBeGreaterThan(0);
	});
	it('Create a department', async () => {
		const department: Departments = {
			type: 'onSale',
			bathrooms: 1,
			lat: '-34.6037389',
			lon: '-58.3815704',
			price: '1000000',
			parkingSlots: 1,
			rooms: 1,
		};
		const departments: Departments = await departmentsController.create(
			department
		);
		expect(departments).toBeTruthy();
	});
	it('Update a department', async () => {
		const department: Departments = {
			type: 'onSale',
			bathrooms: 1,
			lat: '-34.6037389',
			lon: '-58.3815704',
			price: '1000000',
			parkingSlots: 1,
			rooms: 1,
			_id: '628e276afdfa523c3a0d315d',
		};

		const responseUpdated = await departmentsController.update(department);

		expect(responseUpdated).toBe(true);
	});
});
