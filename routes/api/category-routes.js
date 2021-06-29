const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: [Product],
  })
    .then((categoryAll) => {
      res.json(categoryAll);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id,
    },
  })
    .then((categoryId) => {
      res.json(categoryId);
    })
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((categoryNew) => {
      res.json(categoryNew);
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((categoryUpdate) => {
      res.json(categoryUpdate);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryDelete) => {
      res.json(categoryDelete);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
