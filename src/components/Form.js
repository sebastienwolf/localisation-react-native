import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyForm = () => {
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date :</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        
      />
      <Text style={styles.label}>Heure :</Text>
      <TextInput
        style={styles.input}
        value={heure}
        onChangeText={setHeure}
      />
      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
      />
      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={styles.input}
        value={prenom}
        onChangeText={setPrenom}
      />
      <Text style={styles.label}>Téléphone :</Text>
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={setTelephone}
        keyboardType="phone-pad"
        maxLength={10}

      />
      <Text style={styles.label}>E-mail :</Text>
      <TextInput
        style={styles.input}
        value={mail}
        onChangeText={setMail}
        keyboardType="email-address"
      />
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default MyForm;