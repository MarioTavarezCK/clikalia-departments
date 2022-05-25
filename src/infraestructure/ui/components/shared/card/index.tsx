import Departments from '@/domain/entities/departments';
import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';
import React from 'react';
import Tags from '../tags';

const Card = ({ department }: { department: Departments }) => {
	return (
		<Box
			marginTop={{ base: '1', sm: '5' }}
			display='flex'
			flexDirection={{ base: 'column', sm: 'row' }}
			justifyContent='space-between'>
			<Box
				display='flex'
				flex='1'
				marginRight='3'
				position='relative'
				alignItems='center'>
				<Box
					width={{ base: '100%', sm: '85%' }}
					zIndex='2'
					marginLeft={{ base: '0', sm: '5%' }}
					marginTop='5%'>
					<Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
						<Image
							borderRadius='lg'
							src={
								'https://firebasestorage.googleapis.com/v0/b/portafolio-mario-8551f.appspot.com/o/Galer%C3%ADa%2Fclikalia.PNG?alt=media&token=ab6825d0-41ae-49f3-bc2b-66f2f80eb26e'
							}
							alt='some good alt text'
							objectFit='contain'
						/>
					</Link>
				</Box>
				<Box zIndex='1' width='100%' position='absolute' height='100%'>
					<Box
						bgGradient={useColorModeValue(
							'radial(orange.600 1px, transparent 1px)',
							'radial(orange.300 1px, transparent 1px)'
						)}
						backgroundSize='20px 20px'
						opacity='0.4'
						height='100%'
					/>
				</Box>
			</Box>
			<Box
				display='flex'
				flex='1'
				flexDirection='column'
				justifyContent='center'
				marginTop={{ base: '3', sm: '0' }}>
				<Tags tags={[`$${department.price}`]} />
				<Heading marginTop='1'>
					<Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
						Hermoso departamento
					</Link>
				</Heading>
				<Stack spacing={2}>
					<Text
						as='p'
						marginTop='2'
						color={useColorModeValue('gray.700', 'gray.200')}
						fontSize='lg'>
						Cuenta con {department.rooms} habitaciones
					</Text>
					<Text
						as='p'
						marginTop='2'
						color={useColorModeValue('gray.700', 'gray.200')}
						fontSize='lg'>
						{department.bathrooms} Baños
					</Text>
					<Text
						as='p'
						marginTop='2'
						color={useColorModeValue('gray.700', 'gray.200')}
						fontSize='lg'>
						{department.parkingSlots} Estacionamiento(s)
					</Text>
				</Stack>
			</Box>
		</Box>
	);
};

export default Card;
