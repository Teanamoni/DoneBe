import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function NoteDetail({ route, navigation }) {
  const { note, updateNote } = route.params;
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    // Pas user keluar dari halaman, update kontennya
    return () => {
      updateNote({ ...note, content: content });
    };
  }, [content]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>{note.title}</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Tulis catatanmu di sini..."
        multiline
        textAlignVertical="top"
        placeholderTextColor="#888"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0D995',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5F7161',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
});
