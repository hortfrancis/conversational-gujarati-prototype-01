import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { createDisplayOutputTool } from './tools';
import AppHeader from './components/AppHeader';
import Output from './components/Output';
import './App.css';

function App() {
  const [translationPhrase, setTranslationPhrase] = useState({
    englishText: '',
    phoneticGujaratiText: '',
    gujaratiText: ''
  });

  const tools = useMemo(() => {
    return [createDisplayOutputTool(setTranslationPhrase)];
  }, [setTranslationPhrase]);

  useRealtimeAgent(tools);


  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Output {...translationPhrase} />
      </main>
    </div>
  );
}

export default App;
