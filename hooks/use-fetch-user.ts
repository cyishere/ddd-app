import { useEffect, useState } from "react";

import { User } from "../utils/types";

declare global {
  interface Window {
    __user: any;
  }
}

export async function fetchUser(
  cookie: string = ""
): Promise<{ user: User; loading: boolean } | null> {
  if (typeof window !== "undefined" && window.__user) {
    return window.__user;
  }

  const res = await fetch(
    "/api/me",
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  );

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (typeof window !== "undefined") {
    window.__user = json;
  }

  return json;
}

export function useFetchUser({ required }: { required?: boolean } = {}) {
  const [isLoading, setIsLoading] = useState(
    () => !(typeof window !== "undefined" && window.__user)
  );

  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return window.__user || null;
  });

  useEffect(() => {
    if (!isLoading && user) {
      return;
    }

    setIsLoading(true);

    let isMounted = true;

    fetchUser().then((user) => {
      if (isMounted) {
        if (required && !user) {
          window.location.href = "/api/login";
          return;
        }

        setUser(user);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isLoading };
}
