export class Matrix {
  private data: number[][];

  constructor(data: number[][]) {
    this.data = data;
  }

  public add(other: Matrix): Matrix {
    if (
      this.data.length !== other.data.length ||
      this.data[0].length !== other.data[0].length
    ) {
      throw new Error('Matrix dimensions must match.');
    }

    const result = this.data.map((row, i) =>
      row.map((value, j) => value + other.data[i][j])
    );

    return new Matrix(result);
  }
}
