"use client";

import Giscus from "@giscus/react";

export function PostComments() {
  return (
    <Giscus
      repo="juheehasaeyo/TechBlog"
      repoId="R_kgDOMWKrJg"
      category="Announcements"
      categoryId="DIC_kwDOMWKrJs4Crw5x"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
    />
  );
}
