// Hooks
import { useEffect, useState } from 'react';
// Entities
import Departments from '@/domain/entities/departments';
// Controllers
import DepartmentsController from '@/infraestructure/controllers/departments';
// Shared Components
import Card from '../../../shared/card';
import NotElements from '../../../shared/notElements';
import { Box, Button, ButtonGroup, Center } from '@chakra-ui/react';
import Alert from '@/infraestructure/alerts';

const Table = ({
	hasUpdated,
	onClick,
	setData,
	setUpdateElement,
}: {
	hasUpdated: boolean;
	onClick: any;
	setData: any;
	setUpdateElement: any;
}) => {
	const [departments, setDepartments] = useState<Departments[]>([]);

	const getAll = async () => {
		DepartmentsController.getInstance()
			.getAll()
			.then(setDepartments)
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(() => {
		getAll();
	}, [hasUpdated]);

	const handleCreate = () => {
		setUpdateElement(false);
		onClick();
	};

	const handleDelete = (_id: string) => {
		DepartmentsController.getInstance()
			.delete(_id)
			.then(() => {
				Alert.getInstance().show(
					'Muy bien',
					'Departamento eliminado correctamente',
					'success'
				);
				getAll();
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handleUpdate = (department: Departments) => {
		onClick();
		setData(department);
		setUpdateElement(true);
	};

	return (
		<>
			{departments.length === 0 && <NotElements onClick={onClick} />}
			{departments.length > 0 && (
				<Box alignSelf={'end'}>
					<Center mt={'10'}>
						<Button
							onClick={() => handleCreate()}
							_hover={{ bg: 'red.300' }}
							bgColor={'red.500'}
							color={'white'}>
							Crear departamento
						</Button>
					</Center>
					{departments.map(department => (
						<Box key={department._id}>
							<Card department={department} />
							<Center mt={'10px'}>
								<ButtonGroup size='md' variant='outline' spacing='6'>
									<Button
										onClick={() => handleDelete(department._id || '')}
										_hover={{ bg: 'red.300' }}
										bgColor={'red.500'}
										color={'white'}>
										Eliminar
									</Button>
									<Button
										onClick={() => handleUpdate(department)}
										_hover={{ bg: 'red.300' }}
										bgColor={'red.500'}
										color={'white'}>
										Editar
									</Button>
								</ButtonGroup>
							</Center>
						</Box>
					))}
				</Box>
			)}
		</>
	);
};

export default Table;
