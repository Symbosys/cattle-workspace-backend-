import { db } from "../../../db/db.js";
class UserService {
    static async findUserById(id) {
        return await db.user.findUnique({
            where: {
                id,
            },
        });
    }
}
export default UserService;
//# sourceMappingURL=user.service.js.map