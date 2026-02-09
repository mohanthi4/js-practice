import { assertEquals, assertAlmostEquals , assertArrayIncludes, assertGreater, assertGreaterOrEqual, assertLess, assertLessOrEqual} from "@std/assert";
import { total, unique } from "../src/mfr.js";

Deno.test("Ribbon Count", () => assertEquals(total([1,2,3]),6));

Deno.test("unique ", () => assertEquals(unique(["a","a",["b"],"a"]),["a","b"]));

Deno.test("float", () => assertAlmostEquals(total([2.99,4.1]),7,0.1));
Deno.test("array includes", () => assertArrayIncludes([21,2,4,[3],3],[[3]]));
Deno.test("array greater", () => assertGreater(21,20));
Deno.test("array greater equal", () => assertGreaterOrEqual(21,21));
Deno.test("array less", () => assertLess(21,22));
Deno.test("array less / equal", () => assertLessOrEqual(21,21));
Deno.test("array less / equal", () => assertLessOrEqual(21,21));
