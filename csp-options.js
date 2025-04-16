let options = {
 contentSecurityPolicy: {
  directives: {
   defaultSrc: ["'self'"],
   baseUri: ["'self'"],
   blockAllMixedContent: [],
   fontSrc: ["'self'", "https:", "data:"],
   frameAncestors: ["'self'"],
   imgSrc: ["'self'", "data:", "https:"],
   objectSrc: ["'none'"],
   scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
   scriptSrcElem: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
   scriptSrcAttr: ["'none'"],
   styleSrc: ["'self'", "https:", "'unsafe-inline'"],
   upgradeInsecureRequests: [],
  },
 },
};

export default options;
