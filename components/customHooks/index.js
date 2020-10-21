import {useCallback, useState} from 'react'

export default function useForceUpdate() {
    const [, forceUpdate] = useState();
  
    return useCallback(() => {
      forceUpdate(s => !s);
    }, []);
  }