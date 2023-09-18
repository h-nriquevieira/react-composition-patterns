import { User } from "../types/User";

export async function fetchMockData() {
  const users: User[] = await Promise.resolve([
    {
      name: "João",
      age: 27,
      isActive: true,
    },
    {
      name: "Maria",
      age: 32,
      isActive: true,
    },
    {
      name: "Pedro",
      age: 32,
      isActive: false,
    },
  ]);

  return users;
}
