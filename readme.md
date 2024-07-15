# Generative AI with Hugging Face and Node.js

This project uses the Hugging Face API to generate text using the "gpt2" model using a Node.js application. Through a simple interface, users can send prompts and receive generated text in response.

## Requirements

- Node.js (v12 or higher)
- NPM (v6 or higher)
- Hugging Face API Key

## Facility

1. Clone this repository:
 ```sh
 https://github.com/Diego232323A/IA_GENERATIVA.git
 cd ai-generative
 ```

2. Install the dependencies:
 ```sh
 npm install
 ```

## Use

1. Start the server:
 ```sh
 node index.js
 ```

2. Send a POST request to `http://localhost:3000/generate` with a JSON body like the following using Postman or any similar tool:
 ```json
 {
 "prompt": "write a poem about nature"
 }
 ```

