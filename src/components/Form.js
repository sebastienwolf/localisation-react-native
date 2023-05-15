import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { format } from 'date-fns';


const MyForm = ({latitude, longitude, adress, image}) => {
  const [date, setDate] = useState(format(new Date(), 'dd/MM/yyyy'));
  const [heure, setHeure] = useState(format(new Date(), 'H:m'));
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [prenomError, setPrenomError] = useState(false);
  const [nomError, setNomError] = useState(false);

  
  const sendEmail = async () => {

    if (description === '') {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (nom === '') {
      setNomError(true);
    } else {
      setNomError(false);
    }

    if (prenom === '') {
      setPrenomError(true);
    } else {
      setPrenomError(false);
    }

    if (mail === '') {
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (telephone === '') {
      setTelError(true);
    } else {
      setTelError(false);
    }
   
    var options = {
      subject: "Signalement",
      recipients: ["s.mouret.pro@gmail.com"],
      body:
        `
      <p>${prenom} ${nom}<br>
      ${telephone}<br>
      ${mail}</p>
      <p>date: ${date} heure: ${heure}<br>
      ${adress}<br>
      latitude: ${latitude} longitude: ${longitude}
      ${description}</p>
    `,
    attachments: [image],
    isHtml: true,
    
    };

    try {
      const result = await MailComposer.composeAsync(options);
      setError('L\'e-mail a été envoyé avec succès');
    } catch (error) {
      if(!description || !nom || !prenom || !mail || !telephone){
        setError('Veuillez remplir tous les champs');
      }else if(!image){
        setError('Veuillez ajouter une image');
      }else{
        setError('Une erreur est survenue lors de l\'envoi de l\'e-mail');
      }
    }
  }

  return (
    <View style={styles.container}>
       <View style={styles.row}>
      <View style={styles.div}>
      <Text style={styles.label}>Date :</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        editable={false}
      />
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>Heure :</Text>
      <TextInput
        style={styles.input}
        value={heure}
        onChangeText={setHeure}
        editable={false}
      />
      </View>
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={[styles.input, descriptionError && styles.inputError]}
        value={description}
        onChangeText={setDescription}
        multiline={true}
        required={true}
      />
       {/* <View>
        {this.description == "je suis con" ? <Text style={styles.label}>c'est ok</Text> : <Text style={styles.label}>ecris un truc</Text>}
      </View> */}
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={[styles.input, nomError && styles.inputError]}
        value={nom}
        onChangeText={setNom}
        required={true}
      />
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>Prénom :</Text>
      <TextInput
        style={[styles.input, prenomError && styles.inputError]}
        value={prenom}
        onChangeText={setPrenom}
        required={true}
      />
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>Téléphone :</Text>
      <TextInput
        style={[styles.input, telError && styles.inputError]}
        value={telephone}
        onChangeText={setTelephone}
        keyboardType="phone-pad"
        maxLength={10}
        required={true}
      />
      </View>
      <View style={styles.div}>
      <Text style={styles.label}>E-mail :</Text>
      <TextInput
        style={[styles.input, mailError && styles.inputError]}
        value={mail}
        onChangeText={setMail}
        keyboardType="email-address"
        required={true}
      />
      </View>

      <Text style={styles.label}>{error}</Text>
      
      <Button title="Envoyer" onPress={sendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 15,
    width:"100%"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  div: {
    Width: "100%",
    alignItems: 'center',
  },
  row: {
    gap: 10,
    Width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputError: {
    borderColor: 'red',
  },

});

export default MyForm;