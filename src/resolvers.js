const Item = require('./models/Item');

resolvers = {
  Query: {
    hello: () => 'hello',
    items: () => {
      return Item.find();
    },
    item: (_, args) => {
      return Item.findOne({ code_name: args.code_name }, (err, data) => {
        return { data };
      });
    }
  }
};

module.exports = resolvers;

// cats: () => Cat.find();
