const { ObjectId } = require('mongodb');
const { getDB } = require('../db/connect');

const getAllContacts = async (req, res) => {
try {
const db = getDB();
const data = await db.collection('contacts').find().toArray();
res.status(200).json(data);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

const getContact = async (req, res) => {
try {
const id = req.params.id;

```
if (!ObjectId.isValid(id)) {
  return res.status(400).json({ message: 'Invalid contact ID' });
}

const db = getDB();

const data = await db.collection('contacts').findOne({
  _id: new ObjectId(id)
});

if (!data) {
  return res.status(404).json({ message: 'Contact not found' });
}

res.status(200).json(data);
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

const createContact = async (req, res) => {
try {
const db = getDB();

```
const result = await db.collection('contacts').insertOne(req.body);

res.status(201).json({
  message: 'Contact created successfully',
  id: result.insertedId
});
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

const updateContact = async (req, res) => {
try {
const id = req.params.id;

```
if (!ObjectId.isValid(id)) {
  return res.status(400).json({ message: 'Invalid contact ID' });
}

const db = getDB();

const result = await db.collection('contacts').replaceOne(
  { _id: new ObjectId(id) },
  req.body
);

if (result.matchedCount === 0) {
  return res.status(404).json({ message: 'Contact not found' });
}

res.status(200).json({
  message: 'Contact updated successfully'
});
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

const deleteContact = async (req, res) => {
try {
const id = req.params.id;

```
if (!ObjectId.isValid(id)) {
  return res.status(400).json({ message: 'Invalid contact ID' });
}

const db = getDB();

const result = await db.collection('contacts').deleteOne({
  _id: new ObjectId(id)
});

if (result.deletedCount === 0) {
  return res.status(404).json({ message: 'Contact not found' });
}

res.status(200).json({
  message: 'Contact deleted successfully'
});
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

module.exports = {
getAllContacts,
getContact,
createContact,
updateContact,
deleteContact
};
