import { deepEqual, equal } from "node:assert";
import test from "node:test";
import { JSDOM } from "jsdom";

test("select paragraph and access", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p>`);

  equal(dom.window.document.querySelector('p')!.textContent, 'Hi!');
});

test("", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p><p>Hidyhow!</p>`);

  const result = dom.window.document.querySelectorAll('p').length;

  deepEqual(result, 2);
});

