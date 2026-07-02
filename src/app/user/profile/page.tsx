import MyProfileView from "@/features/user/UserAccount/NavAccount/MyProfileView/MyProfileView";
import { fetchOptions } from "@/lib/api/options.api";

export default async function MyProfile() {
  const  options = await fetchOptions();

  return <MyProfileView countries={options.countries} />;
}
