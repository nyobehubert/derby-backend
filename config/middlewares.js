module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "yourBucketName.s3.yourRegion.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "yourBucketName.s3.yourRegion.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  "Action"[
    ("s3:PutObject",
    "s3:GetObject",
    "s3:ListBucket",
    "s3:DeleteObject",
    "s3:PutObjectAcl")
  ],
];
