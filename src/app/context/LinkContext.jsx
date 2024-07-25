"use client"
import React, { createContext, useState } from 'react';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(null);
  const [currentPlatform, setCurrentPlatform] = useState('');
  const [currentLink, setCurrentLink] = useState('');

  const handleAddLink = () => {
    setCurrentPromptIndex(nextIndex);
    setCurrentPlatform('');
    setCurrentLink('');
  };

  const handleSaveLink = () => {
    if (currentPlatform && currentLink) {
      setLinks([...links, { platform: currentPlatform, link: currentLink, index: nextIndex }]);
      setNextIndex(nextIndex + 1);
      setCurrentPromptIndex(null);
    }
  };

  const handleRemoveLink = (indexToRemove) => {
    setLinks(links.filter(link => link.index !== indexToRemove));
  };

  const handleRemovePrompt = () => {
    setCurrentPromptIndex(null);
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        currentPromptIndex,
        currentPlatform,
        currentLink,
        handleAddLink,
        handleSaveLink,
        handleRemoveLink,
        handleRemovePrompt,
        setCurrentPlatform,
        setCurrentLink
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
