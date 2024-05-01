"use client"; // Indicates that this code should only be executed on the client-side

import { useEffect } from "react"; // Importing the useEffect hook from React

const YandexMetrika: React.FC = () => {
  // Define a functional component named YandexMetrika
  const isBrowser = typeof window !== "undefined"; // Check if the code is running in a browser environment

  // Function to load the Yandex Metrika script
  const loadScript = () => {
    if (isBrowser) {
      // Only execute if running in a browser
      // Define a function to load the Yandex Metrika script
      (function (
        m: Record<string, any>,
        e: Document,
        t: string,
        r: string,
        i: string
      ) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date().valueOf();
        for (let j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        const k: HTMLScriptElement = e.createElement(t) as HTMLScriptElement;
        k.async = true;
        k.src = r;
        const a: HTMLScriptElement | null = e.getElementsByTagName(
          t
        )[0] as HTMLScriptElement | null;
        if (a) {
          a.parentNode?.insertBefore(k, a);
        }
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      // Initialize Yandex Metrika
      (window as any).ym(97161005, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  };

  // Run the loadScript function when the component mounts
  useEffect(() => {
    if (isBrowser) {
      // Only execute if running in a browser
      loadScript(); // Load the Yandex Metrika script
    }
  }, []);

  // Function to retrieve the Yandex Metrika counter ID
  const getYMId = (): number | null => {
    if (isBrowser) {
      // Only execute if running in a browser
      const script = document.querySelector("script[data-ym]");
      if (script) {
        const ymId = script.getAttribute("data-ym") as string;
        return parseInt(ymId, 10) || null;
      }
    }
    return null;
  };

  return (
    <>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/97161005"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      {isBrowser && (
        <script
          async
          src="https://mc.yandex.ru/metrika/tag.js"
          data-ym={97161005}
          data-clickmap="true"
          data-trackLinks="true"
          data-accurateTrackBounce="true"
          data-webvisor="true"
        />
      )}
      {isBrowser && (
        <div>Your Yandex Metrika counter ID (if available): {getYMId()}</div>
      )}
    </>
  );
};

export default YandexMetrika;
