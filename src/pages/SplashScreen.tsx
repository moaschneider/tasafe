import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSizes, Spacing, Fonts } from '../styles/Theme';
import TaSafeLogo from '../components/TaSafeLogo';

/**
 * Tela de Splash/Carregamento com a marca Ta Safe
 */
export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Simular tempo de carregamento e navegar para o login
    const timer = setTimeout(() => {
      navigation.navigate('Login' as never);
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TaSafeLogo width={200} height={200} />
      </View>
      <Text style={styles.tagline}>Compartilhe trajetos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: Spacing.xl,
  },
  tagline: {
    fontSize: FontSizes.lg,
    fontFamily: Fonts.medium,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
});

