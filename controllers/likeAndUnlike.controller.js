import { responseSuccess } from "../common/helpers/response.helper.js";
import restaurantService from "../services/restaurant.service.js";

const restaurantController = {
  likeAndUnlikeList: async (req, res, next) => {
    try {
      const data = await restaurantService.likeAndUnlike(req);
      const resData = responseSuccess(data, `Xử lí thành công`);
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
  getListRestaurant: async (req, res, next) => {
    try {
      const listRestaurant = await restaurantService.getListRestaurantService(
        req.params.res_id
      );
      const resData = responseSuccess(
        listRestaurant,
        `Get list restaurant successfully`
      );
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
  addRateController: async (req, res, next) => {
    try {
      const data = await restaurantService.addRatedRestaurantService(req);
      const resData = responseSuccess(data, `Xử lí thành công`);
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
  getListRateController: async (req, res, next) => {
    try {
      const data = await restaurantService.getListRatedRestaurantService(
        req.params.res_id
      );
      const resData = responseSuccess(data, `Xử lí thành công`);
      res.status(resData.code).json(resData);
    } catch (err) {
      next(err);
    }
  },
};

export default restaurantController;
