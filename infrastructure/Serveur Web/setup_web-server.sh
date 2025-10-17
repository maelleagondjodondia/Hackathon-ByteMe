#!/bin/bash

# 
# Script d'installation et de configuration du
# Serveur Web + Nginx + Node.js + Lancement du site 
# 

echo "=========================================="
echo " Étape 1 : Mise à jour du système"
echo "=========================================="
sudo apt-get update -y
sudo apt-get upgrade -y

echo "Système mis à jour."
echo ""

# ------------------------------------------

echo "=========================================="
echo " Étape 2 : Installation des dépendances"
echo "=========================================="
sudo apt install -y git curl nginx

echo "Git, Curl et Nginx installés."
echo ""

# ------------------------------------------

echo "=========================================="
echo " Étape 3 : Installation de Node.js et npm"
echo "=========================================="
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "Version de Node.js :"
node -v
echo "Version de npm :"
npm -v
echo ""

# ------------------------------------------

echo "=========================================="
echo "Étape 4 : Configuration de Nginx"
echo "=========================================="
NGINX_CONF="/etc/nginx/sites-available/mon-site"

sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name monsite.com; # ou IP publique

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
EOF

echo "Configuration Nginx créée dans $NGINX_CONF"
echo ""

# ------------------------------------------

echo "================================================="
echo "Étape 5 : Activation du site et redémarrage Nginx"
echo "================================================="
sudo ln -s /etc/nginx/sites-available/mon-site /etc/nginx/sites-enabled/ 2>/dev/null
sudo nginx -t && sudo systemctl restart nginx

echo "Site activé et Nginx redémarré."
echo ""

# ------------------------------------------

echo "========================================================"
echo "Étape 6 : Clonage du dépôt Git et installation du projet"
echo "========================================================"

cd /var/www || exit
sudo git clone https://github.com/maelleagondjodondia/Hackathon-ByteMe.git
sudo chown -R $USER:$USER Hackathon-ByteMe

cd Hackathon-ByteMe/babyfoot-connect || exit
npm install
npm run dev

echo ""
echo "Application installée et lancée."
echo ""

# ------------------------------------------
echo "====================================================="
echo "Installation terminée avec succès !"
echo "Votre site est accessible via : http://localhost:3000"
echo "====================================================="
