import Departments from '@/domain/entities/departments';
import DepartmentsController from '@/infraestructure/controllers/departments';
import { useForm } from 'react-hook-form';
import { Input, Select, Stack, Button, Text } from '@chakra-ui/react';
import Alert from '@/infraestructure/alerts';

const Form = ({
	setHasUpdated,
	departments,
	updateElement,
}: {
	setHasUpdated: any;
	departments: Departments;
	updateElement: boolean;
}) => {
	const { register, handleSubmit } = useForm<Departments>({
		defaultValues: departments,
	});

	const createDepartment = async (department: Departments) => {
		const departmentsController: DepartmentsController =
			DepartmentsController.getInstance();

		try {
			await departmentsController.create(department);
			Alert.getInstance().show(
				'Muy bien',
				'Departamento creado correctamente',
				'success'
			);
		} catch (error) {
			Alert.getInstance().show(
				'Oops',
				'No fue posible crear el departamento',
				'error'
			);
			console.log(error);
		}
	};

	const updateDepartment = async (department: Departments) => {
		const departmentsController: DepartmentsController =
			DepartmentsController.getInstance();

		try {
			await departmentsController.update(department);
			Alert.getInstance().show(
				'Muy bien',
				'Departamento actualizado correctamente',
				'success'
			);
		} catch (error) {
			Alert.getInstance().show(
				'Oops',
				'No fue posible actualizar el departamento',
				'error'
			);
			console.log(error);
		}
	};

	const handleCreateDepartment = async (department: Departments) => {
		if (updateElement) {
			await updateDepartment(department);
		} else {
			await createDepartment(department);
		}
		setHasUpdated(true);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleCreateDepartment)}>
				<Stack spacing={4}>
					<Text mb='8px'>Precio MXN</Text>
					<Input
						{...register('price')}
						type='text'
						placeholder='Ingrese el precio del departamento'
						name='price'
					/>
					<Text mb='8px'>Tipo</Text>
					<Select value={departments.type} {...register('type')}>
						<option value='onSale'>En venta</option>
						<option value='rent'>En renta</option>
					</Select>
					<Text mb='8px'>Cuartos</Text>
					<Input
						{...register('rooms')}
						type='number'
						placeholder='Cantidad de habitaciones'
						name='rooms'
					/>
					<Text mb='8px'>Baños</Text>
					<Input
						{...register('bathrooms')}
						type='number'
						placeholder='Cantidad de baños'
						name='bathrooms'
					/>
					<Text mb='8px'>Estacionamientos</Text>
					<Input
						{...register('parkingSlots')}
						type='number'
						placeholder='Estacionamientos'
						name='parkingSlots'
					/>
					<Text mb='8px'>Latitud</Text>
					<Input
						{...register('lat')}
						type='text'
						placeholder='Latitud'
						name='lat'
					/>
					<Text mb='8px'>Longitud</Text>
					<Input
						{...register('lon')}
						type='text'
						placeholder='Longitud'
						name='lon'
					/>
					<Button type='submit'>
						{updateElement ? 'Actualizar' : 'Crear'}
					</Button>
				</Stack>
			</form>
		</div>
	);
};

export default Form;
