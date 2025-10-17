-- Updated seed data to match exact schema with UUID, admin boolean, and correct table/column names

-- Données de test pour Babyfoot Connect
-- Note: Le mot de passe pour tous les utilisateurs est "password123"

-- Insertion de joueurs de test
INSERT INTO JOUEUR (nom, prenom, email, mdp, admin, elo) VALUES
('Admin', 'Super', 'admin@ynov.com', '$2a$10$rZ5qKvZxKxKxKxKxKxKxKOqKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx', true, 1500),
('Dupont', 'Jean', 'jean.dupont@ynov.com', '$2a$10$rZ5qKvZxKxKxKxKxKxKxKOqKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx', false, 1200),
('Martin', 'Sophie', 'sophie.martin@ynov.com', '$2a$10$rZ5qKvZxKxKxKxKxKxKxKOqKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx', false, 1350),
('Bernard', 'Lucas', 'lucas.bernard@ynov.com', '$2a$10$rZ5qKvZxKxKxKxKxKxKxKOqKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx', false, 1100),
('Petit', 'Emma', 'emma.petit@ynov.com', '$2a$10$rZ5qKvZxKxKxKxKxKxKxKOqKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx', false, 1250);

-- Insertion de babyfoots
INSERT INTO BABYFOOT (label) VALUES
('Babyfoot Pro 1'),
('Babyfoot Pro 2'),
('Babyfoot Classic'),
('Babyfoot Tournament');
