import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Tap</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>me</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>to</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>find</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>something</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>🥳</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'green',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
