import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PROFILES } from '../data/profiles';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
    const [searchText, setSearchText] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);
    const navigation = useNavigation();

    // Extrair tags únicas
    const allTags = Array.from(new Set(PROFILES.flatMap(p => p.tags)));

    // Filtrar perfis
    const filteredProfiles = PROFILES.filter(profile => {
        const matchesSearch = profile.name.toLowerCase().includes(searchText.toLowerCase()) ||
            profile.subject.toLowerCase().includes(searchText.toLowerCase());
        const matchesTag = selectedTag ? profile.tags.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    });

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => { /* Navegar para detalhe se houver */ }}>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subject}>{item.subject}</Text>
                <View style={styles.tagsContainer}>
                    {item.tags.slice(0, 2).map((tag, index) => (
                        <View key={index} style={styles.tagBadge}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                    {item.tags.length > 2 && (
                        <Text style={styles.moreTags}>+{item.tags.length - 2}</Text>
                    )}
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explorar</Text>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar monitor ou matéria..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            <View style={styles.filtersContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={['Todos', ...allTags]}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.filterChip,
                                (selectedTag === item || (item === 'Todos' && selectedTag === null)) && styles.filterChipSelected
                            ]}
                            onPress={() => setSelectedTag(item === 'Todos' ? null : item)}
                        >
                            <Text style={[
                                styles.filterText,
                                (selectedTag === item || (item === 'Todos' && selectedTag === null)) && styles.filterTextSelected
                            ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                />
            </View>

            <FlatList
                data={filteredProfiles}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>Nenhum monitor encontrado.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 16,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 45,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: '100%',
    },
    filtersContainer: {
        marginBottom: 10,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    filterChipSelected: {
        backgroundColor: '#ff4458',
        borderColor: '#ff4458',
    },
    filterText: {
        color: '#666',
        fontSize: 14,
    },
    filterTextSelected: {
        color: '#fff',
        fontWeight: 'bold',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 12,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#eee',
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    subject: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagBadge: {
        backgroundColor: '#f0f2f5',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 6,
    },
    tagText: {
        fontSize: 10,
        color: '#555',
    },
    moreTags: {
        fontSize: 10,
        color: '#999',
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        color: '#999',
        fontSize: 16,
    }
});
