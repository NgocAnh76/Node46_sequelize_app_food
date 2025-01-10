import { responseSuccess } from "../common/helpers/response.helper.js";
import likeServicer from "../services/like.service.js";

const likeController = {
  likeList: async (req, res, next) => {
    try {
      const likes = await likeServicer.likeList(req);
      const resData = responseSuccess(likes, `Get like success`, 200);
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
};
export default likeController;
