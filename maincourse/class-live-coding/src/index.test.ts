import { deepEqual } from "node:assert/strict";
import test from "node:test";

const data = [
  {
    id: "ec7fd743-2074-4251-b6d3-75b67242ed30",
    name: "Elton Johnson"
  },
  {
    id: "ec7fd743-2074-4251-b6d3-75b67242ed31",
    name: "Elton JohnsonId Po"
  },
];

type Person = {
  id: string;
  name: string;
};

function uppercaseNames(names: Person) {
  return [];
}

test("upperCaseNames work with empty array", () => {
  const result = uppercaseNames([]);

  deepEqual(result, []);
});
