import { createContext } from "react";

import { User } from "@/utils/types";

const UserContext = createContext<{
  user: User | null;
  userIsLoading: boolean;
}>({ user: null, userIsLoading: false });

export default UserContext;
