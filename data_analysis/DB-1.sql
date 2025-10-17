
-- ============================================================
-- Base de données : Babyfoot
-- ============================================================

-- Nettoyage préalable
DROP TABLE IF EXISTS MATCH2V2 CASCADE;
DROP TABLE IF EXISTS MATCH1V1 CASCADE;
DROP TABLE IF EXISTS TEAM CASCADE;
DROP TABLE IF EXISTS BABYFOOT CASCADE;
DROP TABLE IF EXISTS JOUEUR CASCADE;

-- Pour générer des UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- TABLE : JOUEUR
CREATE TABLE JOUEUR (
    uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    code_verif VARCHAR(10),
    elo INT DEFAULT 1000,
    admin boolean default false
);

-- TABLE : Babyfoot
CREATE TABLE BABYFOOT (
    id SERIAL PRIMARY KEY,
    label VARCHAR(20) NOT NULL
);

-- TABLE : Team (équipe 2v2)
CREATE TABLE Team (
    uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    joueur1 UUID NOT NULL,
    joueur2 UUID NOT NULL,
    elo INT DEFAULT 1000,
    CONSTRAINT fk_team_joueur1 FOREIGN KEY (joueur1) REFERENCES JOUEUR(uid) ON DELETE CASCADE,
    CONSTRAINT fk_team_joueur2 FOREIGN KEY (joueur2) REFERENCES JOUEUR(uid) ON DELETE CASCADE
);

-- TABLE : Match1V1
CREATE TABLE Match1V1 (
    uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    joueurR UUID NOT NULL,
    joueurB UUID NOT NULL,
    dateHeure TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    butsR INT DEFAULT 0,
    butsB INT DEFAULT 0,
    statut VARCHAR(20) DEFAULT 'en_attente',
    babyfoot INT NOT NULL,
    CONSTRAINT fk_match1v1_joueurR FOREIGN KEY (joueurR) REFERENCES JOUEUR(uid) ON DELETE CASCADE,
    CONSTRAINT fk_match1v1_joueurB FOREIGN KEY (joueurB) REFERENCES JOUEUR(uid) ON DELETE CASCADE,
    CONSTRAINT fk_match1v1_babyfoot FOREIGN KEY (babyfoot) REFERENCES BABYFOOT(id) ON DELETE CASCADE
);

-- TABLE : Match2V2
CREATE TABLE Match2V2 (
    uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    teamR UUID NOT NULL,
    teamB UUID NOT NULL,
    dateHeure TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    butsR1 INT DEFAULT 0,
    butsR2 INT DEFAULT 0,
    butsB1 INT DEFAULT 0,
    butsB2 INT DEFAULT 0,
    statut VARCHAR(20) DEFAULT 'en_attente',
    babyfoot INT NOT NULL,
    CONSTRAINT fk_match2v2_teamR FOREIGN KEY (teamR) REFERENCES Team(uid) ON DELETE CASCADE,
    CONSTRAINT fk_match2v2_teamB FOREIGN KEY (teamB) REFERENCES Team(uid) ON DELETE CASCADE,
    CONSTRAINT fk_match2v2_babyfoot FOREIGN KEY (babyfoot) REFERENCES Babyfoot(id) ON DELETE CASCADE
);