# mongoDB

## NoSQL vs SQL

MySQL(SQL) : 규칙에 맞는 데이터입려그 ,테이블 간 JOIN지원, 트랜잭션 지원, 안정성, 일관성, 용어(테이블, 로우, 컬럼)
mongoDB(NoSQL) : 자유로운 데이터 입력, 컬렉션 간 JOIN지원, 트랜잭션 미지원, 확정성, 가용성, 용어(컬렉션, 다큐먼트, 필드)

사용 프로그램 : 컴퍼스(compass), 몽구스(Mongoose)
* 몽구스는 시퀄라이즈와 달리 ODM. 몽고디비 자체가 자바스크립트 인데 굳이 몽구스를 쓰는 이유는 스키마와 같은 추가 기능을 보완해주기 때문임

특징

* 고정된 길이의 배열이면 속성으로 넣고, 계속 늘어날 것 같으면 별도의 컬렉션을 만들어둠

* MySQL는 컬럼 먼저 만들어야 하지만, mongoDB는 그냥 객체처럼 생성하면 됨.

## 스키마

인터페이스처럼 자료형을 지정

```javascript
// .schemas/comment.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
// user 스키마와 연결
const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
```

## 쿼리

```javascript
var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();

router.get('/:id', function (req, res, next) {
  // find 모두 찾기, findOne 하나만 찾기
  // populate(field) commenter를 id가 아닌 이름으로 바꿔줌
  Comment.find({ commenter: req.params.id }).populate('commenter')
    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function (req, res, next) {
  const comment = new Comment({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  // new 스키마(data).save : 생성
  comment.save()
    .then((result) => {
      return Comment.populate(result, { path: 'commenter' });
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.patch('/:id', function (req, res, next) {
  // update : 수정
  Comment.update({ _id: req.params.id }, { comment: req.body.comment })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete('/:id', function (req, res, next) {
  // remove : 삭제
  Comment.remove({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;

```


