USE barberclub;

INSERT INTO profissionais
(nome, especialidade, telefone, ativo)
VALUES
('João Barber', 'Degradê', '71999990001', TRUE),
('Carlos Fade', 'Barba', '71999990002', TRUE),
('Lucas Style', 'Corte Social', '71999990003', TRUE);

INSERT INTO servicos
(nome, duracao_min, preco, profissional_id)
VALUES
('Corte Masculino', 30, 30.00, 1),
('Barba', 20, 20.00, 2),
('Corte + Barba', 50, 45.00, 1),
('Sobrancelha', 10, 10.00, 3);

INSERT INTO clientes
(nome, email, telefone, data_cadastro)
VALUES
('Felipe Santos', 'felipe@email.com', '71988880001', CURDATE()),
('Amanda Silva', 'amanda@email.com', '71988880002', CURDATE()),
('Maria Clara', 'maria@email.com', '71988880003', CURDATE()),
('Davi Souza', 'davi@email.com', '71988880004', CURDATE()),
('Levi Oliveira', 'levi@email.com', '71988880005', CURDATE());

INSERT INTO agendamentos
(cliente_id, servico_id, data_hora, status, observacao)
VALUES
(1,1,'2026-06-20 14:00:00','agendado',''),
(2,2,'2026-06-20 15:00:00','agendado',''),
(3,3,'2026-06-20 16:00:00','concluido','Cliente satisfeito'),
(4,1,'2026-06-21 09:00:00','agendado',''),
(5,4,'2026-06-21 10:00:00','cancelado','Não compareceu');

INSERT INTO usuarios
(nome, email, senha_hash, perfil)
VALUES
('Administrador', 'admin@barbertime.com', '123456', 'admin'),
('João Barber', 'joao@barbertime.com', '123456', 'profissional');