module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b22877a1b6067accb7dfe0463bc8ff2'),
  },
});
