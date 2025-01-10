const restaurantController = {
  likeAndUnlikeList: async (req, res, next) => {
    try {
      const { user_id, date_like, res_id } = req.body;
    } catch (err) {
      next(err);
    }
  },
};

export default restaurantController;
