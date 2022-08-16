require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;
const auth = require('./routes/auth');
const izin = require('./routes/perizinan');
const pelanggaran = require('./routes/pelanggaran');
const santri = require('./routes/santri');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/izin', izin);
app.use('/pelanggaran', pelanggaran);
app.use('/santri', santri);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// module.exports = app;
