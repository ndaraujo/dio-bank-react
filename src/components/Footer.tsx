import { Box, Center, Text, Link, VStack } from "@chakra-ui/react"

export const Footer = () => {
    const neonGradient = "to-r, #00C2FF, #B026FF, #FF26B9"

    return (
        <Box
            as="footer"
            w="100%"
            p={8}
            mt="auto"
            bg="rgba(0, 0, 0, 0.8)"
            backdropFilter="blur(10px)"
            borderTop="1px solid"
            borderColor="whiteAlpha.100"
            position="relative"
        >
            <Box
                position="absolute"
                top="-1px"
                left="0"
                w="100%"
                h="1px"
                bgGradient={neonGradient}
                opacity="0.6"
            />

            <Center>
                <VStack gap={1}>
                    <Text fontSize="sm" color="whiteAlpha.700" letterSpacing="widest" textTransform="uppercase">
                        © 2026 Dio Bank | Todos os direitos reservados
                    </Text>

                    <Text fontSize="md" fontWeight="light">
                        Desenvolvido por{" "}
                        <Link href="https://devlima.tec.br" target="_blank" variant="plain">
                            <Box as="span" fontWeight="bold" bgGradient={neonGradient} bgClip="text" color="orange.400">
                                Fernando Lima
                            </Box>
                        </Link>
                    </Text>
                </VStack>
            </Center>
        </Box>
    )
}