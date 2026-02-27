import { Box, Center, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box 
      as="nav"
      position="fixed" 
      top="0" 
      w="100%" 
      p={6} 
      zIndex="sticky"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Center>
        <Heading 
          size="md" 
          letterSpacing="wider" 
          color="orange.400" 
          fontWeight="light"
          textTransform="uppercase"
        >
          Dio <Box as="span" fontWeight="bold" color="white">Bank</Box>
        </Heading>
      </Center>
    </Box>
  )
}