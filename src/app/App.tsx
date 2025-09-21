import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { createDisplayOutputTool, createProvidePronunciationFeedbackTool } from './tools';
import AppHeader from './components/AppHeader';
import Output from './components/Output';
import PronunciationFeedback from './components/PronunciationFeedback';
import './App.css';


function App() {
  const [translationPhrase, setTranslationPhrase] = useState({
    englishText: '',
    phoneticGujaratiText: '',
    gujaratiText: ''
  });

  const [pronunciationFeedback, setPronunciationFeedback] = useState('');

  const tools = useMemo(() => {
    return [
      createDisplayOutputTool(setTranslationPhrase),
      createProvidePronunciationFeedbackTool(setPronunciationFeedback)
    ];
  }, [setTranslationPhrase]);

  useRealtimeAgent(tools);

  return (
    <div className='App'>
      <AppHeader />
      <main className="flex flex-col gap-10 mt-4">
        <Output {...translationPhrase} />
        <PronunciationFeedback feedbackText={pronunciationFeedback} />
      </main>
    </div>
  );
}

export default App;
