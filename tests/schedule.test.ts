import { test, expect } from "bun:test";
import { SLOTS, isSlotActive, formatRange } from "../src/components/ProgramSchedule";

test("programul are un singur slot non-stop", () => {
  expect(SLOTS).toHaveLength(1);
  expect(SLOTS[0].id).toBe("deepfunky");
});

test("slotul acoperă toate cele 24 de ore și se afișează 24/7", () => {
  const slot = SLOTS[0];
  for (let hour = 0; hour < 24; hour++) {
    expect(isSlotActive(slot, hour)).toBe(true);
  }
  expect(formatRange(slot)).toBe("24/7");
});

test("genurile afișate sunt doar Afro House și Deep House", () => {
  const text = SLOTS.map((s) => `${s.name} ${s.description}`).join(" ").toLowerCase();
  expect(text).toContain("afro house");
  expect(text).toContain("deep house");
  expect(text).not.toContain("manele");
  expect(text).not.toContain("party");
  expect(text).not.toContain("popcorn");
});
