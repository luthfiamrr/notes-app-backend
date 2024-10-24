const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNote = (request, h) => {
  const id = nanoid(16);
  const { title, tags, body } = request.payload;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = { id, title, tags, body, createdAt, updatedAt };

  const isSuccess = notes.push(newNote) > 0;

  if (isSuccess) {
    return h
      .response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: { noteId: id },
      })
      .code(201);
  }

  return h
    .response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    })
    .code(500);
};

const getAllNotes = (request, h) => {
  return h
    .response({
      status: 'success',
      data: { notes },
    })
    .code(200);
};

const getNoteById = (request, h) => {
  const { id } = request.params;

  const note = notes.find((note) => note.id === id);

  if (note) {
    return h
      .response({
        status: 'success',
        data: { note },
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    })
    .code(404);
};

const updateNote = (request, h) => {
  const { id } = request.params;
  const { title, body, tags } = request.payload;

  const index = notes.findIndex((note) => note.id === id); //Metode ini hanya mengembalikan indeks

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      body,
      tags,
      updatedAt: new Date().toISOString(),
    };

    return h
      .response({
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Gagal memperbarui catatan. Id tidak ditemukan',
    })
    .code(404);
};

const deleteNote = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);

    return h
      .response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Gagal menghapus catatan. Id tidak ditemukan',
    })
    .code(404);
};

module.exports = {
  addNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
