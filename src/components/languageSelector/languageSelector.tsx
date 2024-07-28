import React from 'react';
import { useTolgee } from '@tolgee/react';

export const LangSelector = () => {
  const tolgee = useTolgee(['language']);

  return (
    <select
      onChange={(e) => tolgee.changeLanguage(e.target.value)}
      value={tolgee.getLanguage()}
    >
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="es">Spanish</option>
    </select>
  );
};