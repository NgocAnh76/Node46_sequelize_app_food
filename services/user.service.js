import {
  checkFoodExist,
  checkUserExist,
} from "../common/constant/confirm/confirm.js";
import prisma from "../common/constant/prisma/init.prisma.js";
import { BadRequestException } from "../common/helpers/error.helper.js";
const userService = {
  // get like of user
  getLikeByUserService: async (users_id) => {
    const users = await prisma.users.findUnique({
      where: {
        users_id: +users_id,
      },
    });
    if (!users) throw new BadRequestException("User does not exist");
    const listLikeUser = await prisma.like_res.findMany({
      where: {
        users_id: +users_id,
        dis_like: false,
      },
      include: { restaurant: true },
    });
    return { ...users, listLikeUser };
  },
  getRatedOfUserService: async (users_id) => {
    const users = await checkUserExist(users_id);
    if (users) {
      const rates = await prisma.rate_res.findMany({
        where: {
          users_id: +users_id,
        },
        include: { restaurant: true },
      });
      return { ...users, rates };
    }
  },
  oderService: async (req) => {
    const { users_id, food_id, amount, codes, arr_sub_id } = req.body;

    const userExist = await checkUserExist(users_id);
    const foodExist = await checkFoodExist(food_id);

    const rated = await prisma.orders.create({
      data: { users_id, food_id, amount, codes, arr_sub_id },
    });
    return rated;
  },
};
export default userService;
