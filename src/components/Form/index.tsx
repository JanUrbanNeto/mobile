import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import { ScreenshotButton } from '../ScreenshotButton';
import { Feedbacktype } from '../Widget';

import { theme } from '../../theme';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';

interface Props {
   feedbackType: Feedbacktype
}

export function Form({ feedbackType }: Props) {
   const [screenshot, setScreenshot] = useState<string | null>(null)

   const feedbackTypeInfo = feedbackTypes[feedbackType]

   function handleScreenshot() {
      captureScreen({
         format: 'jpg',
         quality: 0.8
      })
         .then(uri => setScreenshot(uri))
         .catch(error => console.log(error));
   }

   function handleScreenshotRemove() {
      setScreenshot(null)
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity>
               <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
               <Image
                  source={feedbackTypeInfo.image}
                  style={styles.image}
               />
               <Text style={styles.titleText}>
                  {feedbackTypeInfo.title}
               </Text>
            </View>
         </View>

         <TextInput
            multiline
            style={styles.input}
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte em detalhes o que está acontecendo, por gentileza!"
            placeholderTextColor={theme.colors.text_secondary}
         />

         <View style={styles.footer}>
            <ScreenshotButton
               onTakeShot={handleScreenshot}
               onRemoveShot={handleScreenshotRemove}
               screenshot={screenshot}
            />

            <Button
               isLoading={false}
            />
         </View>
      </View>
   );
}