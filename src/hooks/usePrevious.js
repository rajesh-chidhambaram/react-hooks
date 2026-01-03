import { useEffect, useRef } from "react";

function usePrevious(value) {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}

export default usePrevious;
