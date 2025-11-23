# RideShare - Ride Sharing App

A modern ride-sharing mobile application built with React Native and Expo, featuring an intuitive interface for finding and booking rides.

## Features

- **Splash Screen**: Beautiful branding screen with RideShare logo
- **Authentication**: Login screen with email/password and social login options (Google, Apple)
- **Find Rides**: Browse available rides with search functionality, map view, and detailed ride listings
- **Profile**: User profile with statistics (rides taken, rating, savings) and menu options

## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation (Stack & Bottom Tabs)
- Expo Vector Icons
- React Native Safe Area Context
- React Native Gesture Handler

## Project Structure

```
├── App.tsx                 # Main app entry point
├── app.json               # Expo configuration
├── navigation/
│   └── AppNavigator.tsx   # Navigation setup
├── screens/
│   ├── SplashScreen.tsx   # Loading/splash screen
│   ├── LoginScreen.tsx    # Authentication screen
│   ├── FindRidesScreen.tsx # Main rides discovery screen
│   └── ProfileScreen.tsx  # User profile screen
├── constants/
│   └── Theme.ts           # App theme, colors, spacing
└── assets/                # Images and icons
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn
- Expo CLI (or use npx)
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
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

## Screen Details

### Splash Screen
- Dark background with white car icon
- "RideShare" title
- "Your journey starts here" tagline

### Login Screen
- Email and password input fields
- "Forgot password?" link
- Social login buttons (Google, Apple)
- Clean, minimalist design

### Find Rides Screen
- Search bar for destinations
- Map view placeholder with markers
- Scrollable list of available rides
- Ride cards showing:
  - Pickup and destination
  - Time
  - Price
  - Available seats
  - Book button

### Profile Screen
- User information (name, email)
- Statistics cards (Rides Taken, Rating, Savings)
- Menu items:
  - My Rides
  - Payment Methods
  - Favorites (with badge)
  - Settings
  - Help & Support
- Logout button

## Customization

### Theme
Edit `constants/Theme.ts` to customize:
- Colors
- Spacing
- Font sizes
- Border radius

### App Configuration
Update `app.json` to modify:
- App name
- Splash screen background
- Icons

## Development

The app uses TypeScript for type safety. Make sure to:
- Type all props and components
- Follow the existing code style
- Use the theme constants for styling

## License

This project is created for educational purposes.

