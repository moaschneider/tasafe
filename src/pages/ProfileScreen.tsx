import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, Spacing, BorderRadius, Fonts } from '../styles/Theme';

/**
 * Tela de perfil com informações do usuário, estatísticas e itens do menu
 */

interface MenuItem {
  id: string;
  icon: string;
  title: string;
  badge?: number;
}

const menuItems: MenuItem[] = [
  { id: '1', icon: 'car-outline', title: 'Minhas Caronas' },
  { id: '2', icon: 'settings-outline', title: 'Configurações' },
  { id: '3', icon: 'document-text-outline', title: 'Regras de conduta' },
];

export default function ProfileScreen({ navigation }: any) {
  const handleLogout = () => {
    // Navegar de volta para o login resetando a pilha de navegação
    navigation.getParent()?.getParent()?.reset({
      index: 0,
      routes: [{ name: 'Login' as never }],
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/avatar01.png')}
              style={styles.avatarImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Alex Santos</Text>
            <TouchableOpacity style={styles.syncButton}>
              <Text style={styles.syncButtonText}>Sincronizar com SIGAA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>48</Text>
          <Text style={styles.statLabel}>Caronas feitas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>4,7</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon as any} size={24} color={Colors.text} />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="arrow-forward" size={20} color={Colors.text} />
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    padding: Spacing.md,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: FontSizes.xl,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  syncButton: {
    backgroundColor: '#94FFE1',
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    alignSelf: 'flex-start',
  },
  syncButtonText: {
    fontSize: FontSizes.xs,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginHorizontal: Spacing.xs,
    alignItems: 'center',
  },
  statValue: {
    fontSize: FontSizes.xxl,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
  },
  menuContainer: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    marginBottom: Spacing.xs,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: FontSizes.md,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginLeft: Spacing.md,
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.round,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  badgeText: {
    color: Colors.white,
    fontSize: FontSizes.xs,
    fontFamily: Fonts.bold,
  },
  headerSpacer: {
    width: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  logoutButtonText: {
    fontSize: FontSizes.md,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginLeft: Spacing.sm,
  },
});

