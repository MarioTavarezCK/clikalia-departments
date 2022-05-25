import { HStack, Tag, SpaceProps } from '@chakra-ui/react';

interface IBlogTags {
	tags: Array<string>;
	marginTop?: SpaceProps['marginTop'];
}

const Tags: React.FC<IBlogTags> = props => {
	return (
		<HStack spacing={2} marginTop={props.marginTop}>
			{props.tags.map(tag => {
				return (
					<Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
						{tag}
					</Tag>
				);
			})}
		</HStack>
	);
};

export default Tags;
