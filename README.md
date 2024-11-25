# README: Convite Online para Eventos (Funcionalidade de Convite)

Este repositório faz parte de um sistema para criação de convites online para eventos. A funcionalidade implementada até o momento é o *core* do sistema, ou seja, a parte fundamental que permite a criação e personalização de convites. Embora o site ainda não esteja completo, com o *core* já é possível criar, validar e complementar informações essenciais de um evento. A funcionalidade de envio do convite, personalização visual e outros recursos estão planejados para as próximas versões.

## Descrição

O objetivo desta funcionalidade é fornecer uma forma simples e eficiente para que os organizadores de eventos possam criar convites digitais personalizados. Embora o sistema ainda esteja em desenvolvimento, a versão atual permite que você:

- Crie um evento com informações básicas.
- Valide as informações inseridas no convite.
- Atribua um ID único ao evento.
- Gere uma senha (se necessária) para proteger informações exclusivas do evento.
- Defina o público esperado.

## Como Funciona

1. **Criação do Evento:**
   O organizador pode fornecer informações parciais sobre o evento, como o nome, data, descrição e público esperado. Essas informações são validadas e preenchidas com valores padrão se necessário.

2. **Validação:**
   A função de validação (`validarEvento`) verifica se todos os campos obrigatórios foram preenchidos corretamente. Caso haja erros, uma mensagem será gerada informando quais campos precisam ser corrigidos.

3. **Complementação do Evento:**
   Após a validação, a função `completarEvento` é responsável por garantir que o evento tenha todos os dados necessários. Caso o evento não tenha um ID ou senha, valores padrão são gerados automaticamente.

## Estrutura do Código

A funcionalidade está estruturada da seguinte maneira:

- **`validarEvento`**: Função responsável por validar os dados do evento. Ela retorna uma lista de erros caso algum dado esteja faltando ou incorreto.
  
- **`completarEvento`**: Função que recebe um objeto de evento parcial, valida as informações e retorna um objeto completo. Se algum dado estiver faltando, ele é automaticamente preenchido (como o ID ou a senha).

- **Dependências Externas**:
  - **`Id`**: Responsável por gerar IDs únicos para cada evento.
  - **`Senha`**: Módulo para gerar senhas aleatórias de segurança para os eventos.
  - **`Evento`**: Modelo que define a estrutura de um evento.

## Exemplo de Uso

Para utilizar a funcionalidade, basta criar um objeto com informações parciais sobre o evento e passá-lo para a função `completarEvento`.

```typescript
import { Id, Senha } from "@/core/shared";
import completarEvento from "./completarEvento";

const eventoParcial = {
  nome: "Festa de Aniversário",
  data: "2024-12-25",
  publicoEsperado: 100
};

try {
  const eventoCompleto = completarEvento(eventoParcial);
  console.log(eventoCompleto);
} catch (erro) {
  console.error("Erro ao criar evento:", erro);
}
```

No exemplo acima, a função `completarEvento` valida e complementa as informações, retornando um evento completo com todos os dados necessários, incluindo um ID gerado automaticamente e uma senha (caso não tenha sido fornecida).

## O que está por vir?

Embora o sistema já tenha a parte essencial do core para criação de eventos e convites, várias funcionalidades ainda estão em desenvolvimento:

- **Personalização visual do convite**: Interface para personalizar o visual do convite (cores, imagens, fontes, etc.).
- **Envio do convite**: Funcionalidade para enviar os convites por e-mail ou redes sociais.
- **RSVP**: Permitir que os convidados confirmem presença.
- **Administração de convidados**: Interface para gerenciar os convidados, incluindo a listagem de quem confirmou presença.

## Como Contribuir

Este repositório está em fase inicial de desenvolvimento, então qualquer contribuição é bem-vinda! Se você deseja contribuir para o projeto, pode começar com as seguintes ações:

- Relatar bugs ou problemas encontrados.
- Sugerir melhorias ou novas funcionalidades.
- Contribuir com código ou documentação.

Para começar a contribuir, basta fazer um fork deste repositório, criar uma branch com suas alterações e enviar um pull request.

## Licença

Este projeto está licenciado sob a Lorena Santos Gonçalves. Consulte o arquivo de licença para mais detalhes.

---

Este README está em constante atualização à medida que novas funcionalidades forem sendo implementadas.
