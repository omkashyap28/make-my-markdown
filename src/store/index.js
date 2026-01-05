import { create } from "zustand";

export const useMarkdownStore = create((set) => ({
  markdownValue: "",
  htmlValue: "xczxc",
  setMarkdownValue: (markdownValue) => set({markdownValue}),
  setHtmlValue: (htmlValue) => set({htmlValue})
}));
