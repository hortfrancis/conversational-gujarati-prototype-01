import { useMemo, useState } from 'react';
import { useRealtimeAgent } from './hooks/';
import { createDisplayOutputTool } from './tools';
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
    <>
      <main>
        <h1>OpenAI Realtime Agent Deployment Spike 01</h1>
        <Output {...agentOutput} />
      </main>
    </>
  );
}

export default App;
