import React from 'react';

type EditorProps = {
  content: string;
  onChange: (content: string) => void;
};

export const Editor: React.FC<EditorProps> = ({ content, onChange }) => {
  return (
    <div className="editor">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing your presentation content..."
      />
    </div>
  );
};