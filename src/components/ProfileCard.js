import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
// LinearGradient removed as it was unused and causing errors.
// Assuming nativewind is not available, we use standard StyleSheet.
// Fallback for LinearGradient if not installed: View.

const { height } = Dimensions.get('window');

import { useTheme } from '../contexts/ThemeContext';

export default function ProfileCard({ profile }) {
    const { theme } = useTheme();

    return (
        <View style={[styles.cardContainer, { backgroundColor: theme.colors.card }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                bounces={false}
            >
                {/* Cover Image */}
                <View style={[styles.imageContainer, { backgroundColor: theme.colors.border }]}>
                    <Image
                        source={{ uri: profile.avatarUrl }}
                        style={styles.coverImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content Body */}
                <View style={[styles.contentBody, { backgroundColor: theme.colors.card }]}>

                    {/* Header Info */}
                    <View style={styles.headerSection}>
                        <Text style={[styles.name, { color: theme.colors.text }]}>{profile.name}</Text>
                        <Text style={[styles.subject, { color: theme.colors.subText }]}>{profile.subject}</Text>
                    </View>

                    {/* Tags First */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Interesses & Tags</Text>
                        <View style={styles.tagsContainer}>
                            {profile.tags.map((tag, index) => (
                                <View key={index} style={[styles.tagBadge, { backgroundColor: theme.isDarkMode ? '#333' : '#f1f8e9', borderColor: theme.isDarkMode ? '#555' : '#c5e1a5' }]}>
                                    <Text style={[styles.tagText, { color: theme.isDarkMode ? '#fff' : '#558b2f' }]}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Methodology */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Metodologia</Text>
                        <Text style={[styles.bioText, { color: theme.colors.subText }]}>{profile.methodology}</Text>
                    </View>

                    {/* Experience */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Experiência</Text>
                        <Text style={[styles.bioText, { color: theme.colors.subText }]}>{profile.experience}</Text>
                    </View>

                    {/* Bio */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Sobre mim</Text>
                        <Text style={[styles.bioText, { color: theme.colors.subText }]}>{profile.bio}</Text>
                    </View>

                    {/* General Info */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Informações Gerais</Text>

                        <View style={styles.infoRow}>
                            <Text style={[styles.infoLabel, { color: theme.colors.text }]}>Avaliação:</Text>
                            <Text style={[styles.infoValue, { color: theme.colors.subText }]}>⭐ {profile.rating} ({profile.reviews} reviews)</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={[styles.infoLabel, { color: theme.colors.text }]}>Local:</Text>
                            <Text style={[styles.infoValue, { color: theme.colors.subText }]}>{profile.location}</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={[styles.infoLabel, { color: theme.colors.text }]}>Valor:</Text>
                            <Text style={[styles.infoValue, { color: theme.colors.subText }]}>{profile.price}</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={[styles.infoLabel, { color: theme.colors.text }]}>Disponibilidade:</Text>
                            <Text style={[styles.infoValue, { color: theme.colors.subText }]}>{profile.details}</Text>
                        </View>
                    </View>

                    {/* Extra padding for bottom actions */}
                    <View style={{ height: 100 }} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 10
    },
    scrollContent: {
        flexGrow: 1,
    },
    imageContainer: {
        height: height * 0.45,
        position: 'relative',
        backgroundColor: '#e3f2fd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverImage: {
        width: '100%',
        height: '90%',
        marginTop: 20,
    },
    // imageOverlay removed
    headerSection: {
        marginBottom: 15,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    subject: {
        fontSize: 18,
        color: '#666',
        marginTop: 2,
        fontWeight: '500'
    },
    contentBody: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingHorizontal: 25,
        paddingTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    // ... (removed avatarContainer styles as it is gone)
    section: {
        marginBottom: 20,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    bioText: {
        fontSize: 15,
        color: '#555',
        lineHeight: 22,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tagBadge: {
        backgroundColor: '#f1f8e9', // Light green tint
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c5e1a5',
    },
    tagText: {
        fontSize: 14,
        color: '#558b2f',
        fontWeight: '600',
    },
    detailRow: {
        // ...
    },
    detailText: {
        fontSize: 16,
        color: '#555',
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'flex-start', // Top alignment for wrapped text
    },
    infoLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#455a64',
        width: 130, // Increased width
    },
    infoValue: {
        fontSize: 15,
        color: '#607d8b',
        flex: 1,
        lineHeight: 20, // Better spacing for multi-line
    }
});
