const User = require('../../modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSignUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });

    let token = jwt.sign({email, id:newUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({
        message: 'User created successfully',
        token,
        newUser
    });
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    let user = await User.findOne({ email });
    if(user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({email, id:user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({token, user});
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
};
};

const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({name: user.name, email: user.email});
};

module.exports = {
    userSignUp,
    userLogin,
    getUserById
};