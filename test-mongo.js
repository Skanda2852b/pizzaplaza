const mongoose = require('mongoose');

// Test MongoDB connection
async function testConnection() {
  try {
    const uri = "mongodb+srv://skanda:sZKOJe4xqtsbU0PE@cluster0.ta4hsoi.mongodb.net/pizzaplaza?retryWrites=true&w=majority&appName=Cluster0";
    
    console.log('Testing MongoDB connection...');
    console.log('URI:', uri.replace(/\/\/.*@/, '//***:***@')); // Hide credentials
    
    await mongoose.connect(uri);
    console.log('✅ MongoDB connection successful!');
    
    // Test creating a simple document
    const TestSchema = new mongoose.Schema({ name: String, timestamp: Date });
    const Test = mongoose.model('Test', TestSchema);
    
    const testDoc = await Test.create({ name: 'test', timestamp: new Date() });
    console.log('✅ Document created successfully:', testDoc._id);
    
    await Test.deleteOne({ _id: testDoc._id });
    console.log('✅ Test document cleaned up');
    
    await mongoose.disconnect();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    
    if (error.message.includes('bad auth')) {
      console.log('\n🔍 Authentication Error - Possible solutions:');
      console.log('1. Check your username and password');
      console.log('2. Make sure your IP is whitelisted in MongoDB Atlas');
      console.log('3. Verify user permissions in Database Access');
      console.log('4. Check if the password contains special characters that need URL encoding');
    }
  }
}

testConnection();
