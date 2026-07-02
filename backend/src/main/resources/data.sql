DELETE FROM resource;
DELETE FROM category;

INSERT INTO category (id, name, description) VALUES
('11111111-1111-1111-1111-111111111111', 'Java', 'Ressources pour apprendre Java et Spring Boot'),
('22222222-2222-2222-2222-222222222222', 'Frontend', 'Ressources autour de React, TypeScript et Vite'),
('33333333-3333-3333-3333-333333333333', 'Base de données', 'SQL, PostgreSQL et modélisation de données');

INSERT INTO resource (id, title, description, url, type, status, created_at, category_id) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Spring Boot Tutorial', 'Guide complet pour débuter avec Spring Boot', 'https://example.com/spring-boot', 'COURSE', 'TODO', '2026-07-02', '11111111-1111-1111-1111-111111111111'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'React Basics', 'Cours pour commencer avec React', 'https://example.com/react-basics', 'VIDEO', 'IN_PROGRESS', '2026-07-02', '22222222-2222-2222-2222-222222222222'),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'PostgreSQL Cheat Sheet', 'Résumé rapide des commandes SQL importantes', 'https://example.com/postgres-cheatsheet', 'DOCUMENTATION', 'DONE', '2026-07-02', '33333333-3333-3333-3333-333333333333'),
('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Java Collections', 'Explication des collections en Java', 'https://example.com/java-collections', 'ARTICLE', 'TODO', '2026-07-02', '11111111-1111-1111-1111-111111111111'),
('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'TypeScript pour débutants', 'Introduction à TypeScript', 'https://example.com/typescript-beginners', 'COURSE', 'IN_PROGRESS', '2026-07-02', '22222222-2222-2222-2222-222222222222'),
('ffffffff-ffff-ffff-ffff-ffffffffffff', 'SQL JOINs explained', 'Tutoriel sur les jointures SQL', 'https://example.com/sql-joins', 'ARTICLE', 'DONE', '2026-07-02', '33333333-3333-3333-3333-333333333333');
