    # Solana Token Bridge Service
    
    A Node.js service that automatically mints tokens when native SOL is received at a specified vault address. This service uses the Solana blockchain and integrates with Helius for transaction monitoring.
    
    ## Features
    
    - Monitors incoming SOL transfers to a specified vault address
    - Automatically mints tokens based on received SOL amount
    - Built with TypeScript for type safety
    - Uses Express.js for the webhook endpoint
    - Integrates with Solana Web3.js and SPL Token libraries
    
    ## Prerequisites
    
    - Node.js (v14 or higher)
    - npm or yarn
    - Solana CLI (optional, for testing)
    - A Solana wallet with SOL for transaction fees
    
    ## Installation
    
    1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```
    
    2. Install dependencies:
    ```bash
    npm install
    ```
    
    3. Create a `.env` file in the root directory with the following variables:
    ```env
    PRIVATE_KEY=your_private_key_in_base58
    PUBLIC_KEY=your_public_key
    TOKEN_MINT_ADDRESS=your_token_mint_address
    ```
    
    ## Project Structure
    
    ```
    ├── src/
    │   ├── address.ts      # Environment variables and address configurations
    │   ├── index.ts        # Main Express server and webhook handler
    │   └── mintTokens.ts   # Token minting and transfer logic
    ├── package.json
    ├── tsconfig.json
    └── README.md
    ```
    
    ## Usage
    
    1. Build the TypeScript files:
    ```bash
    npx tsc -b
    ```
    
    2. Start the server:
    ```bash
    node dist/index.js
    ```
    
    The server will start on port 3000 and listen for POST requests at the `/helius` endpoint.
    
    ## API Endpoints
    
    ### POST /helius
    
    Receives webhook notifications for transactions. When SOL is sent to the vault address, it automatically mints equivalent tokens to the sender's address.
    
    Example webhook payload structure:
    ```json
    {
      "description": "Transaction description",
      "nativeTransfers": [
        {
          "amount": 5000000000,
          "fromUserAccount": "sender_address",
          "toUserAccount": "vault_address"
        }
      ]
    }
    ```
    
    ## Security Considerations
    
    - Keep your private key secure and never commit it to version control
    - Use environment variables for sensitive information
    - Implement rate limiting and request validation in production
    - Consider implementing signature verification for webhook requests
    
    ## Technical Details
    
    - Built with TypeScript for enhanced type safety
    - Uses Express.js for the HTTP server
    - Integrates with @solana/web3.js for blockchain interactions
    - Uses @solana/spl-token for token operations
    - Implements bs58 for private key encoding/decoding
    
    ## License
    
    ISC
    
    ## Contributing
    
    1. Fork the repository
    2. Create your feature branch (`git checkout -b feature/amazing-feature`)
    3. Commit your changes (`git commit -m 'Add some amazing feature'`)
    4. Push to the branch (`git push origin feature/amazing-feature`)
    5. Open a Pull Request
