import { responseSuccess } from "../common/helpers/response.helper.js";
import userService from "../services/user.service.js";

const userController = {
  getListLikeUser: async (req, res, next) => {
    const listLikeOfUsers = await userService.getLikeByUserService(
      req.params.users_id
    );
    const resData = responseSuccess(
      listLikeOfUsers,
      "Get list rate of restaurant successfully"
    );
    res.status(resData.code).json(resData);
  },
  getRatedUser: async (req, res, next) => {
    try {
      const listRatedOfUser = await userService.getRatedOfUserService(
        req.params.users_id
      );
      const resData = responseSuccess(
        listRatedOfUser,
        "Get list rate of user successfully"
      );
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },

  oderController: async (req, res, next) => {
    try {
      const data = await userService.oderService(req);
      const resData = responseSuccess(data, `Oder created successfully`);
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
};
export default userController;
