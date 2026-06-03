CREATE DATABASE IF NOT EXISTS barberclub;

USE barberclub;

CREATE TABLE profissionais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    duracao_min INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    profissional_id INT NOT NULL,

    CONSTRAINT fk_servicos_profissionais
    FOREIGN KEY (profissional_id)
    REFERENCES profissionais(id)
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    data_cadastro DATE NOT NULL
);

CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    servico_id INT NOT NULL,

    data_hora DATETIME NOT NULL,

    status ENUM(
        'agendado',
        'concluido',
        'cancelado'
    ) NOT NULL,

    observacao TEXT,

    CONSTRAINT fk_agendamento_cliente
    FOREIGN KEY (cliente_id)
    REFERENCES clientes(id),

    CONSTRAINT fk_agendamento_servico
    FOREIGN KEY (servico_id)
    REFERENCES servicos(id)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    senha_hash VARCHAR(255) NOT NULL,

    perfil ENUM(
        'admin',
        'profissional'
    ) NOT NULL
);