const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
  const fileText = fs.readFileSync(FILE_PATH);
  return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(profiles));
};

const profile = (req, res) => {
  const { name, email, password, bio } = req.body;

  const profileData = {
    id: req.file.filename,
    name,
    email,
    password,
    bio,
  };

  const profiles = getProfileData();
  profiles.push(profileData);
  saveProfileData(profiles);
  return res.status(200).send({ profileData });
};

const getProfile = (req, res) => {
  const profileId = req.params.id;
  const profiles = getProfileData();

  const profileResult = profiles.find((prof) => prof.id === profileId);

  if (profileResult) return res.status(200).send({ profileResult });

  return res.status(404).send({ error: { message: 'Profile not found' } });
};

module.exports = {
  profile,
  getProfile,
};