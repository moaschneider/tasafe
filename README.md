# Ta Safe - Compartilhe trajetos

O aplicativo **Ta Safe** surgiu no contexto do desenvolvimento de um projeto prático para a disciplina de Engenharia de Software III, do curso de Sistemas para Internet do IFRS Campus Porto Alegre. O projeto busca conectar todas as pessoas da comunidade acadêmica da instituição por meio de um **aplicativo mobile** com o objetivo de promover o compartilhamento de caronas.

O retorno para casa - principalmente no turno da noite - é uma preocupação para os estudantes que utilizam o transporte público. Além de ser demorado e dispendioso, expõe os estudantes a ambientes de insegurança no centro da cidade. Ao mesmo tempo, também é perceptível, pela quantidade de carros que acessam o estacionamento da instituição, um grande números de integrantes da comunidade acadêmica que poderiam ofertar caronas.

Dessa forma, o aplicativo poderia proporcionar, de forma rápida e prática, o contato entre motoristas e caroneiros, diminuindo a sobrecarga do sistema de transporte público ao utilizar veículos de forma mais racional. Estudantes se deslocam mais rápido, de forma segura e fortalecem os laços entre os membros da comunidade acadêmica. E, como se não bastasse, ainda minimizando a emissão de gases de efeito estufa.



## Features

O aplicativo foi construído com React Native e Expo, apresentando uma interface simples e intuitiva para compartilhar caronas.

- **Splash Screen**: Tela de abertura com o logo do Ta Safe; 
- **Autenticação**: Tela de login com entrada de email e senha ou autenticação via redes sociais (Google e Apple);
- **Encontre caronas**: Procukre caronas disponíveis com a funcionalidade de busca por digitação, via mapa ou através da lista detalhada;
- **Perfil do usuário**: Perfil do usuário com histórico de viagens, configurações, regras de conduta e logout.

## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation (Stack & Bottom Tabs)
- Expo Vector Icons
- React Native Safe Area Context
- React Native Gesture Handler

## Estrutura do projeto

```
├── App.tsx                 # Principal entry point da aplicação
├── app.json                # Configuração do Expo
├── navigation/
│   └── AppNavigator.tsx    # Navigation setup
├── screens/
│   ├── SplashScreen.tsx    # Splash screen
│   ├── LoginScreen.tsx     # Tela de autenticação
│   ├── FindRidesScreen.tsx # Tela de busca de caronas
│   └── ProfileScreen.tsx   # Tela de perfil do usuário
├── constants/
│   └── Theme.ts            # Configurações de aparência
└── assets/                 # Imagens e ícones
```

## Instalação

### Requisitos

- Node.js (v20.19.0 or higher recommended)
- npm or yarn
- Expo CLI (or use npx)
- Expo Go app on your mobile device (for testing)

### Instalação

1. Instalação de dependências:
```bash
npm install
```

2. Iniciar development server:
```bash
npm start
```

3. Run on your platform:
- **iOS**: `npm run ios` (requires macOS)
- **Android**: `npm run android` (requires Android SDK)
- **Web**: `npm run web`
- **Expo Go**: Scan QR code with Expo Go app

## Navigation Flow

1. **Splash Screen** → Shows app branding (2 seconds)
2. **Login Screen** → User authentication
3. **Main Tabs** → After login
   - **Find Rides Tab** → Browse and search for rides
   - **Profile Tab** → User profile and settings


## Customização

### Temas
Edite `constants/Theme.ts` para customizar:
- Cores
- Espaçamentos
- Fontes
- Bordas

### Configuração do aplicativo
Edite `app.json` para modificar:
- Nome da aplicação
- Fundo da Splash Screen
- Icones

## Desenvolvimento

O aplicativo utiliza TypeScript para segurança de tipos. Certifique-se de:
- Tipar todas as props e componentes
- Seguir o estilo de código existente
- Usar as constantes do tema para estilização

## Licença

Este projeto foi criado para fins educacionais.

