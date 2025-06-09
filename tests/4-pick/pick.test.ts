import { CustomPick, Todo } from "src/4-pick/pick";

describe("CustomPick", () => {
  test("should pick attributes correctly", () => {
    const todo: CustomPick<Todo, "title" | "completed"> = {
      title: "Clean room",
      completed: false,
    };

    expect(todo).toEqual({
      title: "Clean room",
      completed: false,
    });
  });
});
