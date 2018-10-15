# MySQL

C : Create
R : Read
U : Update
D : Delete

## sequelize

시퀄라이즈는 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해 주는 도구(ORM)
    * 자바스크립트 구문을 알아서 SQL로 바꿔줌

```javascript
const path = require('path');
const Sequelize = require('sequelize');

// 시퀄라이즈 사용을 위한 환경 설정
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });

module.exports = db;

```

```javascript
// ./models/user.js
// 모델 정의하기
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    // id는 자동으로 기본 키 연결 하므로 따로 컬럼 필요없음
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()'),
    },
  }, {
    timestamps: false,
  });
};
```
