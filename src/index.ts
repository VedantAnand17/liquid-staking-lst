require('dotenv').config();
import express from 'express';
import { burnTokens, mintTokens, sendNativeTokens } from './mintTokens';

const app = express();

const HELIUS_RESPONSE = { "description": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g transferred 5 SOL to BPswaHFHgfBfEuGXP6tbXGHDHfsFQNe3vzYCTVu4RZrD.", 
    "nativeTransfers": [ { 
        "amount": 5000000000, 
        "fromUserAccount": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g", 
        "toUserAccount": "BPswaHFHgfBfEuGXP6tbXGHDHfsFQNe3vzYCTVu4RZrD" } ], }

        const VAULT = "BPswaHFHgfBfEuGXP6tbXGHDHfsFQNe3vzYCTVu4RZrD"


app.post('/helius', async(req, res) => {
    const incomingTxn = HELIUS_RESPONSE.nativeTransfers.find(x => x.toUserAccount === VAULT)
    if(!incomingTxn) {
        res.json({message: "Processed"})
        return
    }
    const fromAddress = incomingTxn.fromUserAccount;
    const toAddress = VAULT;
    const amount = incomingTxn.amount;
    const type = "received_native_sol";
        await mintTokens(fromAddress, amount);

    // if (type === "received_native_sol") {
    // } else {
    //     // What could go wrong here?
    //     await burnTokens(fromAddress, toAddress, amount);
    //     await sendNativeTokens(fromAddress, toAddress, amount);
    // }

    res.send('Transaction successful');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});