import { Box, Center, Container } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { CardLogin } from "./components/CardLogin"

function App() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="black"
      bgGradient="radial(circle at 50% 50%, #1a1a1a 0%, #000 100%)"
      color="white"
    >
      <Header />

      <Box flex="1">
        <Container maxW="container.sm">
          <Center minH="90vh">
            <CardLogin />
          </Center>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default App