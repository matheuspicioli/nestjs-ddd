import { BankAccount } from './bank-account';
import { BankAccountRepository } from './bank-account.repository';
import { TransferService } from './transfer.service';

//Application Service
export class BankAccountService {
  constructor(private bankAccountRepo: BankAccountRepository) {}

  async create(account_number: string) {
    const bankAccount = new BankAccount(0, account_number);
    await this.bankAccountRepo.insert(bankAccount);
    return bankAccount;
  }

  findAll(): Promise<BankAccount[]> {
    return this.bankAccountRepo.findAll();
  }

  findOne(id: string): Promise<BankAccount | null> {
    return this.bankAccountRepo.findOne(id);
  }

  async transfer(
    account_number_src: string,
    account_number_dest: string,
    amount: number,
  ) {
    const bankAccountSrc = await this.bankAccountRepo.findByAccountNumber(
      account_number_src,
    );
    const bankAccountDest = await this.bankAccountRepo.findByAccountNumber(
      account_number_dest,
    );

    const transferService = new TransferService();
    transferService.transfer(bankAccountSrc, bankAccountDest, amount);

    await this.bankAccountRepo.update(bankAccountSrc);
    await this.bankAccountRepo.update(bankAccountDest);
  }
}
