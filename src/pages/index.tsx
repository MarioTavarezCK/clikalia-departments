import Departments from '@/infraestructure/ui/components/features/departments';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
	return (
		<ChakraProvider>
			<Departments />
		</ChakraProvider>
	);
}
