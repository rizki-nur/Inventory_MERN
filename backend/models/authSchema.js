import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
});

const Auths = mongoose.model('auths', authSchema);
export default Auths;