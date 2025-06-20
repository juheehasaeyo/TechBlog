"use client";

import useTheme from "@/hooks/useTheme";
import Giscus from "@giscus/react";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="juheehasaeyo/TechBlog"
      repoId="R_kgDOMWKrJg"
      category="Announcements"
      categoryId="DIC_kwDOMWKrJs4Crw5x"
      id="comments"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="ko"
      loading="eager"
      theme={theme}
    />
  );
};

export default Comments;
