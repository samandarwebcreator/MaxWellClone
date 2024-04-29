"use client";

import { useEffect } from "react";

const Head: React.FC = () => {
  useEffect(() => {
    // Define Yandex.Metrika counter script
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
      k.async = true; // Set async property
      k.src = r;
      const a: HTMLScriptElement | null = e.getElementsByTagName(
        t
      )[0] as HTMLScriptElement | null;
      if (a) {
        a.parentNode?.insertBefore(k, a);
      }
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    (window as any).ym(97161005, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, []);

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
    </>
  );
};

export default Head;
