module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4e6422c4130b842834effd36348bc9f7'),
  },
});
