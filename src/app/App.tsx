import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { createDisplayOutputTool } from './tools';
import AppHeader from './components/AppHeader';
import Output from './components/Output';
import './App.css';

function App() {
  const [agentOutput, setAgentOutput] = useState({
    englishText: '',
    phoneticGujaratiText: '',
    gujaratiText: ''
  });

  const tools = useMemo(() => {
    return [createDisplayOutputTool(setAgentOutput)];
  }, [setAgentOutput]);

  useRealtimeAgent(tools);


  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Output {...agentOutput} />
      </main>
    </div>
  );
}

export default App;
