import { useRouter } from "next/router";
import React from "react";

export default function BlogSlug() {
  const router = useRouter();
  const { blogSlug } = router.query;

  if (!blogSlug) {
    return <div>No existe este blog, intenta seleccionando otro.</div>;
  }

  return <div>{`BlogSlug: ${blogSlug}`}</div>;
}
