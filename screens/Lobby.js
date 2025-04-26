import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';

export default function Lobby({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddPress = () => {
    setModalVisible(true);
  };

  const handleCreate = () => {
    if (title.trim() !== '') {
      const newNote = { id: Date.now().toString(), title: title, content: '' }; // tambah content kosong
      setNotes([...notes, newNote]);
      setModalVisible(false);
      setTitle('');
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    setTitle('');
  };

  const handleNotePress = (note) => {
    navigation.navigate('NoteDetail', {
      note,
      updateNote: (updatedNote) => {
        setNotes((prevNotes) =>
          prevNotes.map((n) => (n.id === updatedNote.id ? updatedNote : n))
        );
      },
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.noteCard} onPress={() => handleNotePress(item)}>
      <Text style={styles.noteTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Satu centang hari ini, satu langkah{'\n'}
        lebih dekat ke tujuan
      </Text>

      <Image source={require('../assets/DB-Welcome.png')} style={styles.bee} />

      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 180, paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Modal Input */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Buat Judul Catatan</Text>
            <TextInput
              placeholder="Masukkan judul..."
              value={title}
              onChangeText={setTitle}
              style={styles.input}
              placeholderTextColor="#888"
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
                <Text style={styles.modalButtonText}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleCreate}>
                <Text style={styles.modalButtonText}>Buat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7e6',
    padding: 10,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    top: 60,
    left: 10,
    fontSize: 16,
    color: '#000',
  },
  bee: {
    position: 'absolute',
    top: 40,
    right: 10,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#CDF2CA',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#99BC85',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#A0C49D',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#B0D9B1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#5F7161',
    fontWeight: 'bold',
  },
  noteCard: {
    backgroundColor: '#A0D995',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 16,
    color: '#7E5C5C',
    fontWeight: 'bold',
  },
});
