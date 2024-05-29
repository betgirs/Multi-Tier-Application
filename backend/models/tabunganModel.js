import mongoose from "mongoose";
const { Schema } = mongoose;

const tabunganSchema = new Schema({
    tanggal: {
        type: Date,
        required: true,
    },
    jumlah: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v >= 0;
            },
            message: props => `${props.value} must be a positive number!`
        }
    }
});

export default mongoose.model('Tabungancolls', tabunganSchema);
