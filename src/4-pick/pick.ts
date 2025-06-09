/* Utility Types: Pick
Provided by TS in order to facilitate common type transformations.
*/

/* Object types
//Anonymous
function greet(person: { name: string; age: number }) {}

//Named 
interface Person {}

//Type alias
type Person = {}
*/

type CustomPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

/* Operators: keyof
Gets an object type and creates an union of its keys
type K = 'title' | 'description' | 'completed'
*/

export { CustomPick };
