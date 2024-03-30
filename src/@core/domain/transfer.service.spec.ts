import { BankAccount } from './bank-account';
import { TransferService } from './transfer.service';

describe('TransferService Tests', () => {
  const transfer_service = new TransferService();

  it('should be transfered 50 amount between accounts', () => {
    const source_account = new BankAccount(100, '1111-11');
    const destination_account = new BankAccount(100, '2222-22');
    transfer_service.transfer(source_account, destination_account, 50);
    expect(source_account.balance).toBe(50);
    expect(destination_account.balance).toBe(150);
  });
});
