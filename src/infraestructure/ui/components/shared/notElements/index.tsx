import { Box, Heading, Text, Button } from '@chakra-ui/react';

const NotElements = ({ onClick }: { onClick: any }) => {
	return (
		<Box textAlign='center' py={10} px={6}>
			<Heading
				display='inline-block'
				as='h2'
				size='2xl'
				bgGradient='linear(to-r, red.400, red.600)'
				backgroundClip='text'>
				Oops
			</Heading>
			<Text fontSize='18px' mt={3} mb={2}>
				No se encontraron departamentos
			</Text>
			<Text color={'gray.500'} mb={6}>
				¿Deseas crear uno?
			</Text>

			<Button
				colorScheme='red'
				onClick={onClick}
				bgGradient='linear(to-r, red.400, red.500, red.600)'
				color='white'
				variant='solid'>
				Crear
			</Button>
		</Box>
	);
};

export default NotElements;
