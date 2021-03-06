import { Box, Flex, Icon, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import { FaComment, FaDev, FaInfoCircle, FaHeart } from 'react-icons/fa'

interface Props {
	url: string
	reactionsCount: number
	commentsCount: number
}

export const Footer = (props: Props) => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="footer" mt="16px" mb="24px" textAlign="center">
			<Flex align="center" justify="flex-end" mb="16px">
				<Flex as="span" align="center" mr="8px">
					<Icon as={FaHeart} color={color} mx="8px" />
					{props.reactionsCount}
				</Flex>

				<Flex as="span" align="center">
					<Icon as={FaComment} color={color} mx="8px" />
					{props.commentsCount}
				</Flex>
			</Flex>

			<Box>
				<Icon as={FaInfoCircle} color={color} mr="8px" mb="4px" />
				This article was originally published on{' '}
				<ChakraLink href="https://dev.to/michaelgee" isExternal>
					<Icon as={FaDev} fontSize="1.2em" />
				</ChakraLink>
				. To leave a like or participate in the comments, please visit the{' '}
				<ChakraLink href={props.url} isExternal>
					original post
				</ChakraLink>{' '}
				to provide some much appreciated feedback!
			</Box>
		</Box>
	)
}
