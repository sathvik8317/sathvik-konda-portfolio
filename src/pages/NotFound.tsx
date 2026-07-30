import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="label-mono mb-3">Error 404 &mdash; Route Not Found</p>
        <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
