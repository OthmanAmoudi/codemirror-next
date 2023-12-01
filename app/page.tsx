'use client';
import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';

export default function Home() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="500px"
      theme={dracula}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
