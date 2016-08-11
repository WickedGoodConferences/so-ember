module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'so-ember',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
