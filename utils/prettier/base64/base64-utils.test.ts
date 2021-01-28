import { decodeFromBase64, encodeToBase64 } from "./base64-utils";

describe("Base 64 encoder", () => {
  it("encodes data", () => {
    expect(encodeToBase64("helloworld")).toEqual("aGVsbG93b3JsZA==");
  });

  it("encodes large data", () => {
    const text =
      "Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport.";
    const encoded =
      "QmFzZTY0IGVuY29kaW5nIHNjaGVtZXMgYXJlIGNvbW1vbmx5IHVzZWQgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gZW5jb2RlIGJpbmFyeSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgc3RvcmVkIGFuZCB0cmFuc2ZlcnJlZCBvdmVyIG1lZGlhIHRoYXQgYXJlIGRlc2lnbmVkIHRvIGRlYWwgd2l0aCBBU0NJSS4gVGhpcyBpcyB0byBlbnN1cmUgdGhhdCB0aGUgZGF0YSByZW1haW4gaW50YWN0IHdpdGhvdXQgbW9kaWZpY2F0aW9uIGR1cmluZyB0cmFuc3BvcnQu";
    expect(encodeToBase64(text)).toEqual(encoded);
  });

  it("encodes empty data", () => {
    expect(encodeToBase64("")).toEqual("");
  });
});

describe("Base 64 decoder", () => {
  it("decodes data", () => {
    expect(decodeFromBase64("aGVsbG93b3JsZA==")).toMatch("helloworld");
  });

  it("decodes large data", () => {
    const text =
      "Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport.";
    const encoded =
      "QmFzZTY0IGVuY29kaW5nIHNjaGVtZXMgYXJlIGNvbW1vbmx5IHVzZWQgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gZW5jb2RlIGJpbmFyeSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgc3RvcmVkIGFuZCB0cmFuc2ZlcnJlZCBvdmVyIG1lZGlhIHRoYXQgYXJlIGRlc2lnbmVkIHRvIGRlYWwgd2l0aCBBU0NJSS4gVGhpcyBpcyB0byBlbnN1cmUgdGhhdCB0aGUgZGF0YSByZW1haW4gaW50YWN0IHdpdGhvdXQgbW9kaWZpY2F0aW9uIGR1cmluZyB0cmFuc3BvcnQu";
    expect(decodeFromBase64(encoded)).toEqual(text);
  });

  it("decodes empty data", () => {
    expect(decodeFromBase64("")).toEqual("");
  });
});
