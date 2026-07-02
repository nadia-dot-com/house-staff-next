import { routes } from "@/constants/navigation/routes";
import { redirect } from "next/navigation";

export default function UserAccount() {
  redirect(routes.profile);
}
