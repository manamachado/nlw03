import React from 'react';

interface TitleProps {
  text: string
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title text="Título 1" />
      <Title text="Título 2" />
      <Title text="Título 3" />
    </div>
  );
}

export default App;
