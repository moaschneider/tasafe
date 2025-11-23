import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, LightColors, FontSizes, Spacing, BorderRadius, Fonts } from '../styles/Theme';

/**
 * Tela de Encontrar Caronas com busca, visualização do mapa e listagem de caronas
 */

interface Ride {
  id: string;
  pickup: string;
  destination: string;
  time: string;
  price: number | string; // Aceita valores numéricos (R$ X) ou strings como "Opcional" ou "Gratuita"
  seats: number;
}

const mockRides: Ride[] = [
  {
    id: '1',
    pickup: 'IFRS Porto Alegre',
    destination: 'Cavalhada',
    time: '11:30',
    price: 25,
    seats: 3,
  },
  {
    id: '2',
    pickup: 'IFRS Porto Alegre',
    destination: 'Vila Isabel (Viamão)',
    time: '21:00',
    price: 'Opcional',
    seats: 2,
  },
  {
    id: '3',
    pickup: 'IFRS Porto Alegre',
    destination: 'Cachoeirinha (Parada 51)',
    time: '21:30',
    price: 'Gratuita',
    seats: 4,
  },
];

export default function FindRidesScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');

  const renderRideItem = ({ item }: { item: Ride }) => (
    <View style={styles.rideCard}>
      <View style={styles.rideInfo}>
        <View style={styles.rideLocation}>
          <Ionicons name="location" size={16} color={Colors.textSecondary} />
          <Text style={styles.rideText}>{item.pickup}</Text>
        </View>
        <View style={styles.rideLocation}>
          <Ionicons name="paper-plane" size={16} color={Colors.textSecondary} />
          <Text style={styles.rideText}>{item.destination}</Text>
        </View>
        <View style={styles.rideLocation}>
          <Ionicons name="time-outline" size={16} color={Colors.textSecondary} />
          <Text style={styles.rideText}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.rideDetails}>
        <Text style={styles.priceText}>
          {typeof item.price === 'number' ? `R$ ${item.price}` : item.price}
        </Text>
        <Text style={styles.seatsText}>{item.seats} lugares</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Encontrar Caronas</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
          <View style={styles.profileIcon}>
            <Ionicons name="person-outline" size={24} color={Colors.text} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar destino..."
          placeholderTextColor={Colors.textLight}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.mapContainer}>
        {Platform.OS === 'web' ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3648119613313!2d-51.2211984!3d-30.0263901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979082a86e831%3A0x9b4615117c97cf33!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20Grande%20do%20Sul%20-%20Campus%20Porto%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1763928608307!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <Image
            source={{
              uri: 'https://staticmap.openstreetmap.de/staticmap.php?center=-30.0263901,-51.2211984&zoom=15&size=400x200&markers=-30.0263901,-51.2211984,red-pushpin',
            }}
            style={styles.mapImage}
            resizeMode="cover"
          />
        )}
      </View>

      <View style={styles.ridesSection}>
        <Text style={styles.sectionTitle}>Caronas Disponíveis</Text>
        <FlatList
          data={mockRides}
          renderItem={renderRideItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.ridesList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    paddingTop: Spacing.xl + Spacing.xl,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontFamily: Fonts.bold,
    color: Colors.text,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    padding: Spacing.md,
    fontSize: FontSizes.md,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  mapContainer: {
    height: 200,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    backgroundColor: Colors.cardBackground,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  ridesSection: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  ridesList: {
    paddingBottom: Spacing.xl,
  },
  rideCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rideInfo: {
    flex: 1,
  },
  rideLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  rideText: {
    fontSize: FontSizes.sm,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginLeft: Spacing.xs,
  },
  rideDetails: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: FontSizes.lg,
    fontFamily: Fonts.bold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  seatsText: {
    fontSize: FontSizes.sm,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },
  bookButton: {
    backgroundColor: LightColors.secondary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  bookButtonText: {
    color: Colors.white,
    fontSize: FontSizes.sm,
    fontFamily: Fonts.bold,
  },
});

