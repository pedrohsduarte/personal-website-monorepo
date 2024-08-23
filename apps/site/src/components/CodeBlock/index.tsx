import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className='text-md'
      customStyle={{
        borderRadius: '0.375rem',
        padding: '1rem',
        fontSize: 'inherit',
      }}
      codeTagProps={{
        style: {
          fontSize: 'inherit',
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
