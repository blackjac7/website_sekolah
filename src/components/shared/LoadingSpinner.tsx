import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LoadingSpinner = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Player
          autoplay
          loop
          src="https://lottie.host/bfe8cfb2-c676-4ae0-901b-621be1bbe4b0/y4SXjX8YUR.json"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingSpinner;
