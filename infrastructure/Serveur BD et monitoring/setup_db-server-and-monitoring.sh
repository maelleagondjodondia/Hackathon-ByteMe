#!/bin/bash
# ============================================================
# Script de configuration complète de l'infrastructure VM
# Projet : Babyfoot (Ynov Toulouse)
# 
# Description :
#   - Installation PostgreSQL
#   - Importation de la base de données DB-1.sql (via scp)
#   - Installation et configuration de Nagios
# ============================================================

# === 1. Vérification des droits ===
if [ "$EUID" -ne 0 ]; then
  echo " Veuillez exécuter ce script en tant que superutilisateur (sudo)."
  exit 1
fi

echo "Démarrage de la configuration complète de l'infrastructure..."

# === 2. Variables à personnaliser ===
HOTE_LOCAL="X.X.X.X"            # IP ou nom de la machine hôte
UTILISATEUR_LOCAL=""         # utilisateur sur la machine hôte
CHEMIN_FICHIER_HOTE="/home/emmanuel/Téléchargements/DB-1.sql"  # chemin du fichier SQL sur la machine hôte
DESTINATION_VM="/home/$SUDO_USER/Téléchargements"
DB_NAME="babyfootdb"

# === 3. Mise à jour système ===
echo " Mise à jour du système..."
apt update -y && apt upgrade -y

# === 4. Installation de PostgreSQL ===
if ! command -v psql >/dev/null 2>&1; then
  echo " Installation de PostgreSQL..."
  apt install -y postgresql postgresql-contrib
else
  echo " PostgreSQL déjà installé."
fin

systemctl enable postgresql
systemctl start postgresql

# === 5. Transfert du fichier DB-1.sql depuis la machine hôte ===
echo " Transfert du fichier DB-1.sql depuis la machine hôte..."
scp ${UTILISATEUR_LOCAL}@${HOTE_LOCAL}:${CHEMIN_FICHIER_HOTE} ${DESTINATION_VM}/

if [ $? -ne 0 ]; then
  echo "Échec du transfert. Vérifie l’IP de l’hôte et la connectivité réseau (ping)."
  exit 1
fi
echo " Fichier transféré avec succès."

# === 6. Création ou vérification de la base ===
echo " Vérification ou création de la base ${DB_NAME}..."
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'" | grep -q 1 || \
sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME};"

# === 7. Importation du fichier SQL ===
SQL_FILE="${DESTINATION_VM}/DB-1.sql"
echo " Importation de la base dans PostgreSQL..."
sudo -u postgres psql -d ${DB_NAME} -f "$SQL_FILE"

if [ $? -eq 0 ]; then
  echo " Importation réussie dans ${DB_NAME}."
else
  echo " Échec de l'importation du fichier SQL."
  exit 1
fi

# === 8. Vérification du contenu ===
sudo -u postgres psql -d ${DB_NAME} -c "\dt"

# === 9. Installation de Nagios ===
echo " Installation de Nagios (serveur de supervision)..."
apt install -y autoconf gcc make apache2 php libapache2-mod-php libgd-dev unzip > /dev/null

cd /tmp
echo " Téléchargement de Nagios Core..."
wget https://github.com/NagiosEnterprises/nagioscore/releases/download/nagios-4.5.5/nagios-4.5.5.tar.gz -O nagios.tar.gz

tar xzf nagios.tar.gz
cd nagios-4.5.5

echo " Compilation et installation de Nagios..."
./configure --with-httpd-conf=/etc/apache2/sites-enabled
make all
make install-groups-users
usermod -a -G nagios www-data
make install
make install-daemoninit
make install-commandmode
make install-config
make install-webconf

systemctl enable apache2
systemctl restart apache2

# === 10. Création du compte admin Nagios ===
echo " Création du compte administrateur Nagios..."
htpasswd -b -c /usr/local/nagios/etc/htpasswd.users admin admin123

systemctl restart nagios

# === 11. Vérification des services ===
echo " Vérification du statut des services..."
systemctl status postgresql --no-pager | grep Active
systemctl status nagios --no-pager | grep Active
systemctl status apache2 --no-pager | grep Active

# === 12. Informations finales ===
echo " Configuration complète terminée avec succès !"
echo "---------------------------------------------"
echo "Base PostgreSQL : ${DB_NAME}"
echo " Fichier importé : ${SQL_FILE}"
echo " Nagios : http://$(hostname -I | awk '{print $1'})/nagios"
echo " Identifiants Nagios : admin / admin123"
echo "---------------------------------------------"
