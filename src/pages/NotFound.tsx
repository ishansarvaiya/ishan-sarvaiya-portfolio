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
    <div className="flex min-h-[100svh] items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-display mb-4">404</h1>
        <p className="text-lead text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="text-primary underline underline-offset-4 hover:opacity-80">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
