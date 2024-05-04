"use client";

import Image from "next/image";
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
  }, [isBrowser]);

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
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="https://mc.yandex.ru/watch/97161005"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "100%",
              height: "100%",
            }}
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
