const connection = require('../config/db');

exports.getAllVampiros = (req, res) => {
  connection.query('SELECT * FROM vampiros', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createVampiro = (req, res) => {
  const { nome, idade, cla } = req.body;
  if (!nome || !idade || !cla) return res.status(400).send('Campos obrigatorio faltando.');

  connection.query(
    'INSERT INTO vampiros (nome, idade, cla) VALUES (?, ?, ?)',
    [nome, idade, cla],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, nome, idade, cla });
    }
  );
};

exports.updateVampiro = (req, res) => {
  const { id } = req.params;
  const { nome, idade, cla } = req.body;
  connection.query(
    'UPDATE vampiros SET nome = ?, idade = ?, cla = ? WHERE id = ?',
    [nome, idade, cla, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ id, nome, idade, cla });
    }
  );
};

exports.deleteVampiro = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM vampiros WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.status(204).send();
  });
};

