import UserInfo from "@/components/UserInfo";
import { fetchUser } from "@/utils/fetchUser";

export default async function EmployeeDetails({ params }) {
  const users = await fetchUser();
  const param = await params;
  const userId = Number(param.id);
  const user = users.find(u => u.id === userId);

  return (
    <UserInfo user={user} />
  );
}
