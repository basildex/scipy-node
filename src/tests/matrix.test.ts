import { Matrix } from "../linear-algebra/matrix";

describe("Matrix Operations", () => {
  it("should add two matrices", () => {
    const a = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const b = new Matrix([
      [5, 6],
      [7, 8],
    ]);
    const result = a.add(b);

    expect(result).toEqual(
      new Matrix([
        [6, 8],
        [10, 12],
      ]),
    );
  });
});
