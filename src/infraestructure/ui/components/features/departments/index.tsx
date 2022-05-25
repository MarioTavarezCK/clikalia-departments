// Hooks
import { useEffect, useState } from 'react';
// Components
import Form from './form';
import Table from './table';
// Chakra UI
import { Heading, Container, useDisclosure } from '@chakra-ui/react';
import Modal from '../../shared/modal';
import { default as DepartmentsEntity } from '@/domain/entities/departments';

const Departments = () => {
	const [hasUpdated, setHasUpdated] = useState(false);
	const [updateElement, setUpdateElement] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [departments, setDepartments] = useState<DepartmentsEntity>({
		_id: '',
		bathrooms: 0,
		rooms: 0,
		type: 'onSale',
		lat: '',
		lon: '',
		parkingSlots: 0,
		price: '',
	});

	useEffect(() => {
		setHasUpdated(true);
	}, []);

	const handleSubmit = () => {
		onClose();
		setHasUpdated(!hasUpdated);
	};

	const handleCreateDepartment = () => {
		setDepartments({
			_id: '',
			bathrooms: 0,
			rooms: 0,
			type: 'onSale',
			lat: '',
			lon: '',
			parkingSlots: 0,
			price: '',
		});
		onOpen();
	};

	return (
		<Container centerContent={true} maxW={'7xl'} p='12'>
			<Heading as='h1'>Departamentos</Heading>
			<Table
				hasUpdated={hasUpdated}
				onClick={handleCreateDepartment}
				setData={setDepartments}
				setUpdateElement={setUpdateElement}
			/>
			<Modal
				onClick={handleCreateDepartment}
				isOpen={isOpen}
				onClose={onClose}
				title={'Crear Departamento'}>
				<Form
					updateElement={updateElement}
					setHasUpdated={handleSubmit}
					departments={departments}
				/>
			</Modal>
		</Container>
	);
};

export default Departments;
