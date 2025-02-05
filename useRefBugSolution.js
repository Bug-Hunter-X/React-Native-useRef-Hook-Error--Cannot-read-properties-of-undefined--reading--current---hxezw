The solution involves ensuring that the useEffect cleanup function runs before the component unmounts. We can add a condition inside the useEffect's cleanup function to check if the component is still mounted before attempting to access the useRef's current value.  We also ensure the cleanup function always runs.

```javascript
import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const intervalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Some code that runs periodically
      if (!isMounted) return;
      console.log('Interval running');
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      console.log('Interval cleared');
      setIsMounted(false);
    };
  }, []);

  return (
    <View>
      {/* Component content */}
    </View>
  );
};

export default MyComponent;
```