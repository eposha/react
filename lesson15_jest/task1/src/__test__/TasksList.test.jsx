import React from "react";
import { shallow } from "enzyme";
import TasksList from "../TasksList";
import { fetchTasksList } from "../taskGateway";

jest.mock("../taskGateway", () => {
  return {
    createTask: jest.fn(),
    fetchTasksList: jest.fn(() => Promise.resolve([])),
    updateTask: jest.fn(),
    deleteTask: jest.fn(() => Promise.resolve())
  };
});
describe("<TasksList/>", () => {
  it("should request tasks list", () => {
    shallow(<TasksList />);
    expect(fetchTasksList).toBeCalled();
  });
});
