import mongoose from "mongoose";
// import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    //   required: true,
    //   trim: true
    },

    email: {
      type: String,
    //   required: true,
    //   unique: true,
    //   lowercase: true
    },

    password: {
      type: String,
    //   required: true
    },

    isActive: {
      type: Boolean,
    //   default: true
    },

    refreshToken: {
      type: String,   // stored in cookies, secure
    //   default: null
    }
  },

  {
    timestamps: true   // Automatically creates createdAt & updatedAt
  }
);

// // 🔐 PASSWORD HASHING (before saving)
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);

//   next();
// });

// // 🔐 PASSWORD COMPARE METHOD
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const User = mongoose.model("User", userSchema);

export default User;












// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/mydb");
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// export default connectDB;
