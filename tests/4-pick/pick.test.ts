import { CustomPick } from "src/4-pick/pick";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

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
