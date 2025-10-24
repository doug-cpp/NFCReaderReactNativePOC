import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, useColorScheme } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

const NfcComponent = () => {
  const [isReading, setIsReading] = useState(false);
  const colorScheme = useColorScheme();
  const waitTimeToRead = 10_000; // 10 segundos

  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.cancelTechnologyRequest().catch(() => { });
    };
  }, []);

  async function handleReadNfc() {
    
    if (isReading) return;
    setIsReading(true);
    let timeoutId: ReturnType<typeof setTimeout>;

    // Função para cancelar request e lançar erro de timeout
    const timeoutPromise = new Promise<string>((_, reject) => {
      timeoutId = setTimeout(() => {
        NfcManager.cancelTechnologyRequest().catch(() => { });
        reject(`Tempo de leitura esgotado (${waitTimeToRead / 1000} s).`);
      }, waitTimeToRead);
    });

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // Executando a leitura e timeout em paralelo
      const tag = await Promise.race([
        NfcManager.getTag(),
        timeoutPromise,
      ]);

      Alert.alert('Tag NFC lida', JSON.stringify(tag));
    } catch (ex: unknown) {

      timeoutPromise.catch(() => {clearTimeout(timeoutId)});

      let message = `Falha ao ler dados NFC dentro do tempo esperado (${waitTimeToRead / 1000} s). `;
      if (
        ex &&
        typeof ex === 'object' &&
        'message' in ex &&
        typeof (ex as any).message === 'string'
      ) {
        message += (ex as any).message;
      }
      Alert.alert('Erro', message);
    } finally {
      NfcManager.cancelTechnologyRequest().catch(() => { });
      setIsReading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{
        color: colorScheme === 'dark' ? 'white' : 'black',
        margin: 48, fontSize: 16, textAlign: "center"
      }}>
        Aproxime-se de qualquer dispositivo que emita dados NFC
        e pressione o botão abaixo.
      </Text>
      <Button
        title={isReading ? 'Lendo NFC...' : 'Ler dados NFC'}
        onPress={handleReadNfc}
        disabled={isReading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NfcComponent;
