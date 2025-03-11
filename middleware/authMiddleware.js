import jwt from "jsonwebtoken";

// Middleware pour vérifier le token JWT
export const authenticateToken = (req, res, next) => {
 const token = req.header("Authorization")?.replace("Bearer ", "");

 if (!token) {
  return res.status(403).json({ error: "Accès refusé. Token manquant." });
 }

 jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  if (err) {
   return res.status(403).json({ error: "Token invalide ou expiré" });
  }
  req.user = user;
  next();
 });
};

// Middleware pour vérifier si l'utilisateur est un administrateur
export const isAdmin = (req, res, next) => {
 if (req.user?.role !== "ADMIN") {
  return res
   .status(403)
   .json({ error: "Accès interdit. L'utilisateur n'est pas administrateur." });
 }
 next();
};
