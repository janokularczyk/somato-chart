export class Athlete {
  #correctionFactor = 100;
  constructor(athleteName, endo, mezo, ecto) {
    this.athleteName = athleteName;
    this.endo = endo * this.#correctionFactor;
    this.mezo = mezo * this.#correctionFactor;
    this.ecto = ecto * this.#correctionFactor;
  }

  get xValue() {
    return this.x();
  }

  get yValue() {
    return this.y();
  }

  x() {
    return (this.ecto - this.endo) / this.#correctionFactor;
  }

  y() {
    return (2 * this.mezo - (this.endo + this.ecto)) / this.#correctionFactor;
  }
}
