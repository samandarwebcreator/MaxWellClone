"use client";

import { useEffect } from "react";

const YandexMetrika: React.FC = () => {
  const isBrowser = typeof window !== "undefined";

  const loadScript = () => {
    if (isBrowser) {
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

      (window as any).ym(97161005, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  };

  useEffect(() => {
    if (isBrowser) {
      loadScript();
    }
  }, []);

  const getYMId = (): number | null => {
    if (isBrowser) {
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
          data-ym={97161005} // Replace with your actual Yandex Metrika counter ID
          data-clickmap="true"
          data-trackLinks="true"
          data-accurateTrackBounce="true"
          data-webvisor="true"
        />
      )}

      {/* Optionally use the retrieved ymId in your component logic */}
      {isBrowser && (
        <div>
          {/* Example usage: */}
          Your Yandex Metrika counter ID (if available): {getYMId()}
        </div>
      )}
    </>
  );
};

export default YandexMetrika;
