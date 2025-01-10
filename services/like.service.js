import prisma from "../common/constant/prisma/init.prisma.js";

const likeServicer = {
  likeList: async (req) => {
    const likes = await prisma.like_res.findMany();
    return likes;
  },
};
export default likeServicer;
