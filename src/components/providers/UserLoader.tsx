import { fetchUser } from "@/lib/api/user.api";
import { UserHydrator } from "./UserHydrator";

export async function UserLoader() {
  const user = await fetchUser();

  return <UserHydrator user={user} />;
}
