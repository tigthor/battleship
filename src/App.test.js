import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders the game board", () => {
    expect(wrapper.find("Board")).toHaveLength(1);
  });

  it("renders the ship list", () => {
    expect(wrapper.find("ShipList")).toHaveLength(1);
  });

  it("renders the player info", () => {
    expect(wrapper.find("PlayerInfo")).toHaveLength(1);
  });

  it("updates the score when a ship is hit", () => {
    const cell = wrapper.find("Board").find("Cell").first();
    const shipList = wrapper.find("ShipList");

    cell.simulate("click");

    expect(shipList.prop("shipState")).toEqual({
      carrier: { hits: 1, sunk: false },
      battleship: { hits: 0, sunk: false },
      cruiser: { hits: 0, sunk: false },
      submarine: { hits: 0, sunk: false },
      destroyer: { hits: 0, sunk: false }
    });

    expect(wrapper.state("player1Score")).toBe(1);
  });

  it("ends the game when all ships are sunk", () => {
    const cells = wrapper.find("Board").find("Cell");
    const shipList = wrapper.find("ShipList");

    cells.forEach((cell, i) => {
      if (i < 5) {
        cell.simulate("click");
      }
    });

    expect(shipList.prop("shipState")).toEqual({
      carrier: { hits: 5, sunk: true },
      battleship: { hits: 4, sunk: false },
      cruiser: { hits: 3, sunk: false },
      submarine: { hits: 3, sunk: false },
      destroyer: { hits: 2, sunk: false }
    });

    expect(wrapper.state("gameOver")).toBe(true);
  });
});
