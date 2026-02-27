import { useState } from 'react'
import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react"
import { Field } from "./ui/field"
import { PasswordInput } from "./ui/password-input"
import { toaster } from "./ui/toaster"
import { login } from "../services/login"

export const CardLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (login(email)) {
      toaster.create({
        title: "Acesso Autorizado",
        description: `Bem-vindo ao futuro, ${email}!`,
        type: "success",
        duration: 5000,
      });
    } else {
      toaster.create({
        title: "Erro de Autenticação",
        description: "Verifique suas credenciais.",
        type: "error",
      });
    }
  }

  return (
    <Box
      p={12}
      borderRadius="3xl"
      w="100%"
      position="relative"
      bg="rgba(255, 255, 255, 0.03)"
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor="whiteAlpha.300"
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      mt={20}
    >
      {/* Efeito de brilho laranja atrás do card */}
      <Box
        position="absolute"
        top="-20px"
        left="-20px"
        w="100px"
        h="100px"
        bg="orange.500"
        filter="blur(60px)"
        opacity="0.3"
        zIndex="-1"
      />

      <VStack gap={8}>
        <Box textAlign="center">
          <Heading size="xl" fontWeight="thin" letterSpacing="tight">
            Bem-vindo ao <Box as="span" color="orange.400">Futuro.</Box>
          </Heading>
        </Box>

        <VStack gap={5} w="100%">
          <Field label="Identificação">
            <Input
              variant="flushed"
              placeholder="email@dio.bank"
              borderBottomColor="whiteAlpha.400"
              _focus={{ borderBottomColor: "orange.400" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>

          <Field label="Senha">
            <PasswordInput
              variant="flushed"
              placeholder="••••••••"
              borderBottomColor="whiteAlpha.400"
              _focus={{ borderBottomColor: "orange.400" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
        </VStack>

        <Button
          colorPalette="orange"
          variant="outline"
          size="xl"
          width="full"
          borderRadius="full"
          mt={6}
          disabled={email.length === 0 || password.length === 0}
          _disabled={{
            opacity: 0.4,
            cursor: "not-allowed",
            borderColor: "gray.500",
            color: "gray.500",
            _hover: { bg: "transparent" }
          }}
          _hover={{ bg: "orange.400", color: "black" }}
          onClick={handleLogin}
        >
          Acessar Dashboard
        </Button>
      </VStack>
    </Box>
  )
}