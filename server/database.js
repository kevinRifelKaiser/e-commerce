import mongoose from 'mongoose';

const URI = 'mongodb://localhost/garage-sale';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URI);
  console.log('Data base is connected');
}

export default main;