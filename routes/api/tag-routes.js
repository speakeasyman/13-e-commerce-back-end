const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({
    include: [{ model: Product, through: ProductTag }],
  })
    .then((tagAll) => {
      res.json(tagAll);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product, through: ProductTag }],
  })
    .then((tagId) => {
      res.json(tagId);
    })
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tagNew) => {
      res.json(tagNew);
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },    
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((tagUpdate) => {
      res.json(tagUpdate);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagDelete) => {
      res.json(tagDelete);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
