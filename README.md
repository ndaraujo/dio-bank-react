# 🏦 Dio Bank - Futuro Digital

Projeto desenvolvido durante o curso de **Formação React Developer**, totalmente modernizado com as melhores práticas de **Análise e Desenvolvimento de Sistemas (ADS)** de 2026.

Este sistema simula a interface de um banco digital futurista, focando em **Componentização**, **UX (User Experience)** e **TDD (Test-Driven Development)**.

---

## 🚀 Tecnologias Utilizadas

* **React 19** com **TypeScript**
* **Vite**: Ferramenta de build ultra-rápida.
* **Chakra UI v3**: Framework de design moderno e acessível.
* **Vitest & Vitest UI**: Framework de testes de última geração.
* **Lucide React**: Ícones modernos e leves.

---

## 🛠️ Arquitetura do Projeto

O projeto segue uma estrutura de pastas organizada para facilitar a manutenção e escalabilidade:

* `src/components`: Componentes visuais isolados (`Header`, `Footer`, `CardLogin`).
* `src/services`: Regras de negócio e lógica pura separadas da interface.
* `src/ui`: Snippets e componentes base do Chakra UI.
* `src/theme`: Definições globais de cores e constantes.

---

## 🧪 Como Rodar os Testes (TDD)

Este projeto foi desenvolvido utilizando a metodologia de testes. Para verificar a integridade da lógica de login e dos componentes, utilize os comandos abaixo:

```bash
# Rodar testes no terminal
npm test

# Rodar testes com interface visual (Recomendado)
npx vitest --ui