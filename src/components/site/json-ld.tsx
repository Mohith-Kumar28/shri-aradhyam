/**
 * Structured data, emitted as a script tag.
 *
 * `JSON.stringify` is the only thing between page data and the document, so
 * the closing tag sequence is escaped: a description containing "</script>"
 * would otherwise end the block early and spill the rest into the body.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
