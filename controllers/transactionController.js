const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
  // res.send('<h1>This is GET Transaction API');
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc Add all transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransactions = async (req, res, next) => {
  // res.send('<h1>This is POST Transaction API');
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc Delete transactions
// @route GET /api/v1/transactions/:id
// @access Public

exports.deleteTransactions = async (req, res, next) => {
  // res.send('<h1>This is DELETE Transaction API');
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Not transaction found'
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
