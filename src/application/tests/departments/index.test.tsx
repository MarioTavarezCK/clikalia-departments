// Entities
// Controllers
import DepartmentsController from '@/infraestructure/controllers/departments';
import Departments from '@/infraestructure/ui/components/features/departments';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('[Departments] unit tests', () => {
	it('Render Departments', async () => {
		render(<Departments />);
		expect(true).toBe(true);
	});
	// it('When the user enters, it should show the departments', async () => {
	// 	const departments: Departments[] =
	// 		await DepartmentsController.getInstance().getAll();
	// 	console.log(departments);

	// 	expect(departments.length).toBeGreaterThan(0);
	// });
});
