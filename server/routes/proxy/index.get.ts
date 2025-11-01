import { eventHandler } from "h3";

export default eventHandler(async (event) => {
  const url = new URL("https://example.com/"+event.node.req.url).searchParams.get("url");
  if (!url) {
    event.node.res.statusCode = 400;
    return "Missing url parameter";
  }

  const response = await fetch(decodeURIComponent(atob(url)));
  const contentType = response.headers.get("content-type") || "application/octet-stream";
  event.node.res.setHeader("Content-Type", contentType);

  if (contentType.startsWith("image/")) {
    event.node.res.setHeader("Cache-Control", "public, max-age=86400, immutable");
  }

  const data = await response.arrayBuffer();
  return Buffer.from(data);
});
