import { v4 as uuid } from 'uuid';

export class BankAccount {
  id: string;
  balance: number;
  account_number: string;

  constructor(balance: number, account_number: string, id?: string) {
    this.id = id ?? uuid();
    this.balance = balance;
    this.account_number = account_number;
  }

  debit(amount: number): void {
    this.balance -= amount;
  }

  credit(amount: number): void {
    this.balance += amount;
  }
}
