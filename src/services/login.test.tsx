import { describe, it, expect } from 'vitest'
import { login } from './login'

describe('login', () => {

    it('Deve retornar true para um e-mail válido (com @)', () => {
        const response = login('fernando@devlima.com')
        expect(response).toBe(true)
    })

    it('Deve retornar false para um e-mail inválido (sem @)', () => {
        const response = login('fernandodevlima.com')
        expect(response).toBe(false)
    })

    it('Deve retornar true para qualquer string que contenha @', () => {
        const response = login('usuario@teste')
        expect(response).toBe(true)
    })
})