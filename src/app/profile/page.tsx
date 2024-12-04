import { getServerSession } from "next-auth";

import { options } from "@/config/auth";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  return <pre>{JSON.stringify(session)}</pre>;
};

export default ProfilePage;
