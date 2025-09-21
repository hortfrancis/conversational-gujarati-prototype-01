import { useMemo, useState, useEffect } from 'react';
import { useRealtimeAgent } from './hooks';
import {
  createDisplayOutputTool,
  createRatePronunciationTool,
  createProvidePronunciationFeedbackTool
} from './tools';
import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Output from './components/Output';
import PronunciationRating from './components/PronunciationRating';
import PronunciationFeedback from './components/PronunciationFeedback';
import './App.css';

function App() {
  const [translationPhrase, setTranslationPhrase] = useState({
    englishText: '',
    phoneticGujaratiText: '',
    gujaratiText: ''
  });
  const [pronunciationFeedback, setPronunciationFeedback] = useState('');
  const [pronunciationRating, setPronunciationRating] = useState(0);

  const tools = useMemo(() => {
    return [
      createDisplayOutputTool(setTranslationPhrase),
      createRatePronunciationTool(setPronunciationRating),
      createProvidePronunciationFeedbackTool(setPronunciationFeedback)
    ];
  }, [setTranslationPhrase]);

  useRealtimeAgent(tools);

  // When translation phrase changes, clear pronunciation feedback & rating.
  useEffect(() => {
    setPronunciationFeedback('');
    setPronunciationRating(0);
  }, [translationPhrase]);

  // If the stars are 3, clear the feedback, as the user has pronounced it well.
  useEffect(() => {
    if (pronunciationRating === 3) {
      setPronunciationFeedback('');
    }
  }, [pronunciationRating]);

  return (
    <div className='App'>
      <AppHeader />
      <Main>
        <Output {...translationPhrase} />
        <PronunciationRating rating={pronunciationRating} />
        <PronunciationFeedback feedbackText={pronunciationFeedback} />
      </Main>
    </div>
  );
}

export default App;
