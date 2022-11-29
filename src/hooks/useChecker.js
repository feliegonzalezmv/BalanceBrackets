import React, {useState, useEffect} from 'react';
import {bracketChecker} from '../helpers';

const useChecker = text => {
  const [isBalanced, setIsBalanced] = useState(true);

  useEffect(() => {
    if (text) {
      setIsBalanced(bracketChecker(text));
    }
  }, [text]);

  return isBalanced;
};

export default useChecker;
