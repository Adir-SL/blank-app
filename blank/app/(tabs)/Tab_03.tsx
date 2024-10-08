import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import "./Tab_03_styles.css";

export default function Tab_03() {
  return (
    <div className='flex-center'>
      <h1>Third tab</h1>
      <h3>You don't have any items to view yet.</h3>
    </div>
  );
}