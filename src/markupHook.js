import { useState, useEffect } from "react";
import markerSDK from "@marker.io/browser";

export default function useMarkerio() {
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    markerSDK
      .loadWidget({
        project: process.env.MARKER_IO_PROJECT_ID,
      })
      .then((result) => setWidget(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return widget;
}
