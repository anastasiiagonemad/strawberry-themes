import { ref, computed } from "vue";

interface User {
  id: number;
  name: string;
  email?: string;
}

enum UserRole {
  Admin = "admin",
  User = "user",
}

class UserService {
  constructor(private users: User[]) {}

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  },
];

const service = new UserService(users);

const currentUser = ref<User | null>(null);

const userName = computed(() => currentUser.value?.name ?? "Guest");

async function fetchUser(): Promise<void> {
  try {
    currentUser.value = service.findById(1) ?? null;
  } catch (error) {
    console.error(error);
  }
}

fetchUser();