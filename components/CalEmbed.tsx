"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_LINK = "cinmach-productions-re7k86/call-req";
const NAMESPACE = "call-req";

export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          let cal = C.Cal;
          let ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", NAMESPACE, { origin: "https://app.cal.com" });
    window.Cal.ns[NAMESPACE]("inline", {
      elementOrSelector: "#cinmach-cal-inline",
      config: { layout: "month_view" },
      calLink: CAL_LINK,
    });
    window.Cal.ns[NAMESPACE]("ui", {
      styles: { branding: { brandColor: "#C81E3A" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="cinmach-cal-inline"
      className="w-full min-h-[560px] bg-black-secondary border border-border-dark"
    />
  );
}
