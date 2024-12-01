import { Player } from "@lottiefiles/react-lottie-player";
import { memo } from "react";

const LoadingSpinner = memo(({ children }) => {
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
});

export default LoadingSpinner;
