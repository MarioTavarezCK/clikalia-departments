import {
	Modal as ModalChakra,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	ModalCloseButton,
} from '@chakra-ui/react';

const Modal = ({
	title,
	children,
	isOpen,
	onClose,
	onClick,
}: {
	title: string;
	children: any;
	isOpen: any;
	onClose: any;
	onClick: any;
}) => {
	return (
		<ModalChakra isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>{children}</ModalBody>
			</ModalContent>
		</ModalChakra>
	);
};

export default Modal;
