const express = require('express');

const { Post, Comment } = require('../models');

const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      // passport의 deserialize를 통해서 user의 id에 접근 가능
      UserId: req.user.id,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { postId: req.params.id } });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    });

    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/delete', (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
