import Profile from "@/components/Profile";
import getAddress from "../address/getAddress";
export default async function Profilepage() {
  const data = await getAddress();
  console.log(data);

  return (
    <div>
      <Profile addresses={data.addresses} user={data.user} />
    </div>
  );
}
