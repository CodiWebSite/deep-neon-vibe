import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const previousTitle = document.title;
    document.title = "Pagină negăsită | Deep Funky Radio";

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content") ?? "";
    description?.setAttribute(
      "content",
      "Pagina căutată nu există. Întoarce-te pe pagina principală pentru a asculta Deep Funky Radio live.",
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href") ?? "";
    canonical?.setAttribute("href", `https://radio.djfunkyevents.ro${location.pathname}`);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      canonical?.setAttribute("href", previousCanonical);
      robots.remove();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Pagina nu a fost găsită</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Înapoi la radio live
        </a>
      </div>
    </div>
  );
};

export default NotFound;
