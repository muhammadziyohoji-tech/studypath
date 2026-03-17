'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const PROTECTED_ROUTES = ['/universities', '/consulting'];

export function useProtectedRoute() {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Check if current route is protected
      const isProtected = PROTECTED_ROUTES.some(route => 
        pathname.startsWith(route)
      );

      if (!isProtected) {
        setIsChecking(false);
        return;
      }

      try {
        // Check authentication status
        const response = await fetch('/api/auth/check');
        const { isAuthenticated } = await response.json();

        if (!isAuthenticated) {
          // Redirect to auth page with return URL
          router.push(`/auth?returnUrl=${encodeURIComponent(pathname)}`);
        } else {
          setIsChecking(false);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/auth');
      }
    };

    checkAuth();
  }, [pathname, router]);

  return { isChecking };
}