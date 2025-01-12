import { checkRestaurantExist } from "../common/constant/confirm/confirm.js";
import prisma from "../common/constant/prisma/init.prisma.js";
import { BadRequestException } from "../common/helpers/error.helper.js";

const restaurantService = {
  // like and unlike
  likeAndUnlike: async (req, res, next) => {
    const { users_id, date_like, res_id } = req.body;

    const restaurant = await checkRestaurantExist(res_id);
    if (restaurant) {
      const likeExist = await prisma.like_res.findFirst({
        where: { users_id, res_id },
      });
      if (likeExist) {
        const where = { like_id: likeExist.like_id };
        //  (nếu đang like)
        if (!likeExist.dis_like) {
          const data = await prisma.like_res.update({
            where: where,
            data: { dis_like: true },
          });

          return { message: "Unlike successfully", data };
        } else {
          const data = await prisma.like_res.update({
            where: where,
            data: { dis_like: false },
          });
          return { message: "Like successfully", data };
        }
      }
      const data = await prisma.like_res.create({
        data: {
          users_id,
          res_id,
          date_like: date_like || new Date(),
        },
      });

      return { message: "Like successfully", data };
    }
  },
  // get like ò restaurant
  getListRestaurantService: async (res_id) => {
    const restaurant = await checkRestaurantExist(res_id);

    const listLikeRestaurant = await prisma.like_res.findMany({
      where: {
        res_id: +res_id,
        dis_like: false,
      },
      include: {
        users: {
          select: {
            users_id: true,
            full_name: true,
          },
        },
      },
    });
    return { ...restaurant, listLikeRestaurant };
  },

  //add rated
  addRatedRestaurantService: async (req) => {
    const { users_id, res_id, amount, date_rate } = req.body;

    const restaurant = await checkRestaurantExist(res_id);
    if (restaurant) {
      const rated = await prisma.rate_res.create({
        data: { users_id, res_id, amount, date_rate },
      });
      return rated;
    }
  },
  getListRatedRestaurantService: async (res_id) => {
    const restaurant = await checkRestaurantExist(res_id);
    if (restaurant) {
      const rates = await prisma.rate_res.findMany({
        where: {
          res_id: +res_id,
        },
        include: {
          users: {
            select: {
              users_id: true,
              full_name: true,
            },
          },
        },
      });
      return { ...restaurant, rates };
    }
  },
};

export default restaurantService;
