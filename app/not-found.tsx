'use client';
import { useEffect } from 'react';

export default function Custom404() {
    useEffect(() => {
      if (typeof window !== "undefined") {
        
        const timer = setTimeout(() => {
          window.location.replace('http://localhost:3000/');
        }, 5000); 

        return () => clearTimeout(timer);
      }
    }, []);
  
    return (
      <div>
        <h1 className="text-[32px] font-bold text-black pl-2 py-4">404 - Not Found</h1>
        <p className="p-2">The page you are looking for does not exist.</p>
        <p className="p-2">Redirecting to home in 5 seconds...</p>
        
        <div style={{ marginTop: '20px' }}>
          <a href="http://localhost:3000/" className="p-2" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            Go back to Home now
          </a>
        </div>
      </div>
    );
}