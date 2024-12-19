# Transactions API
<br>

## Hard Skills

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="40" alt="sqlite logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" alt="jest logo"  />
</div>

###

###

## Summary

<p>A REST API developed in Node.js with TypeScript using the Fastify framework. The system is designed to manage financial transactions, 
  such as deposits, withdrawals and balance inquiries, with a focus on high performance, scalability and security.
</p>

## Instalation

```bash
git clone
```
```bash
npm install
```
```bash
npm run dev
```

## Functional requirements

<lu>
  <li>[x] - The user must be able to create a new transaction.</li>
  <li>[x] - The user must be able to obtain a summary of their account.</li>
  <li>[x] - The user must be able to list all transactions that have already occurred.</li>
  <li>[x] - The user must be able to view a single transaction.</li>
</lu>

## Business rules

<lu>
  <li>[x] - The transaction can be of the credit type that adds to the total value, or debit that subtracts.</li>
  <li>[x] - It must be possible to identify the user between requests.</li>
  <li>[x] - The user can only view transactions that he created.</li>
</lu>

## Non-functional requirements

<lu>
  <li>[x] - Performance.</li>
  <li>[x] - Scalability.</li>
  <li>[x] - Availability.</li>
  <li>[x] - Maintenance.</li>
</lu>

## Route Structure:

<lu>
  <li>POST /users - Registration of new users.</li>
  <li>POST /transactions - Record of a new transaction.</li>
  <li>GET /transactions - List of transactions.</li>
  <li>GET /transactions/:id - Detailed query for a specific transaction.</li>
  <li>GET /balance - Query the current balance.</li>
</lu>



