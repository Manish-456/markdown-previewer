import React from "react";
import { Header } from "./header";

export function Editor({
  value,
  setMarkDownValue,
  handlePreviewerMode,
  isPreviewerOn,
}) {
  return (
    <div className="md:max-w-xl bg-editor border border-black shadow-black shadow-xl max-w-md w-full">
      <Header
        title={"Editor"}
        isExpanded={!isPreviewerOn}
        handleExpansion={handlePreviewerMode}
      />
      <textarea
        value={value}
        rows={10}
        cols={32}
        onChange={(e) => setMarkDownValue(e.target.value)}
        className={`w-full pt-4 bg-transparent  font-mono h-full bg-editor outline-none px-1 py-2   focus:ring-0 ${
          !isPreviewerOn && "min-h-screen"
        }`}
      />
    </div>
  );
}
