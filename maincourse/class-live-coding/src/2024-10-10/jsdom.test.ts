import { deepEqual, equal } from "node:assert";
import test from "node:test";
import { JSDOM } from "jsdom";

test("select paragraph and access", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p>`);

  equal(dom.window.document.querySelector('p')!.textContent, 'Hi!');
});

test("select all p elements", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p><p>Hidyhow!</p>`);

  const result = dom.window.document.querySelectorAll('p').length;

  deepEqual(result, 2);
});

test("see if class name 'link' exists", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p class="link"></p>`);

  const result = dom.window.document.getElementsByClassName('link')[0].className;

  equal(result, 'link');
});

test("add class name 'coder'", () => {
  const dom = new JSDOM(`<!DOCTYPE html><p id="text"></p>` );

  const textElement = dom.window.document.getElementById("text");

  textElement!.classList.add('coder');

  dom.window.document.body.appendChild(textElement!);

  const result = dom.window.document.getElementsByClassName('coder')[0].className;

  deepEqual(result, 'coder');
});

