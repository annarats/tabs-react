import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs'

function App() {
  const tabData = [
    { id: 1, title: 'Tab1', content: 'This is the content of the Tab1.' },
    { id: 2, title: 'Tab2', content: 'This is the content of the Tab2.' },
    { id: 3, title: 'Tab3', content: 'This is the content of the Tab3.' },
  ]
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="App">
      <Tabs
        tabs={tabData}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
    </div>
  );
}

export default App;
