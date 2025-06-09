import { CustomOmit } from "src/3-omit/omit";
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

describe("CustomOmit", () => {
  test("should exclude fields correctly", () => {
    const todo: CustomOmit<Todo, "description" | "title"> = {
      completed: true,
    };

    expect(Object.keys(todo)).not.contain("title");
    expect(Object.keys(todo)).not.contain("description");
  });
});
