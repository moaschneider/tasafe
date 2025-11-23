import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, Spacing, BorderRadius, Fonts } from '../styles/Theme';
import TaSafeLogo from '../components/TaSafeLogo';

/**
 * Tela de login com e-mail/senha e opções de login social
 */
export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Navegar para o app principal (tela de Encontrar Caronas)
    navigation.replace('MainTabs');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <TaSafeLogo width={160} height={160} />
        </View>

        {/* <Text style={styles.welcomeText}>Bem-vindo de volta</Text> */}
        {/* <Text style={styles.subtitle}>Entre para continuar</Text> */}

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            {/* <Text style={styles.label}>E-mail</Text> */}
            <TextInput
              style={styles.input}
              placeholder="email@exemplo.com"
              placeholderTextColor={Colors.textLight}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            {/* <Text style={styles.label}>Senha</Text> */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                placeholderTextColor={Colors.textLight}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={Colors.textSecondary}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continuar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continuar com Apple</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.lg,
    paddingTop: Spacing.xxl,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
    marginBottom: Spacing.xxl + Spacing.xxl,
  },
  welcomeText: {
    fontSize: FontSizes.xl,
    fontFamily: Fonts.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSizes.md,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: FontSizes.sm,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: FontSizes.md,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
  },
  passwordInput: {
    flex: 1,
    padding: Spacing.md,
    fontSize: FontSizes.md,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  eyeIcon: {
    padding: Spacing.md,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: Spacing.sm,
  },
  forgotPasswordText: {
    fontSize: FontSizes.sm,
    fontFamily: Fonts.regular,
    color: Colors.accent,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: FontSizes.md,
    fontFamily: Fonts.bold,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    marginHorizontal: Spacing.md,
    fontSize: FontSizes.sm,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  socialButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  socialButtonText: {
    color: Colors.text,
    fontSize: FontSizes.md,
    fontFamily: Fonts.medium,
  },
});

