import { BadRequestException } from "../../helpers/error.helper.js";
import prisma from "../prisma/init.prisma.js";

export const checkRestaurantExist = async (res_id) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { res_id: +res_id },
  });
  if (!restaurant) throw new BadRequestException("Restaurant does not exist");
  return restaurant;
};

export const checkUserExist = async (users_id) => {
  const user = await prisma.users.findUnique({
    where: { users_id: +users_id },
  });
  console.log(users_id);
  if (!user) throw new BadRequestException("User does not exist");

  return user;
};

export const checkFoodExist = async (food_id) => {
  const foodExist = await prisma.food.findUnique({
    where: { food_id },
  });
  if (!foodExist) throw new BadRequestException("Food does not exist");
  return foodExist;
};
