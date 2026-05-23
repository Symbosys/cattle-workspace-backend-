import { db } from "../../../db/db.js";

class UserService {
  public static async findUserById(id: string) {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  }
}

export default UserService;