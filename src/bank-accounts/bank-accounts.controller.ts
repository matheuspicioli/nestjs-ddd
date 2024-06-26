import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { BankAccountService } from '../@core/domain/bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './dto/transfer-bank-account.dto';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private bankAccountService: BankAccountService) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    console.log('BANK ACCOUNT DTO', createBankAccountDto);
    return this.bankAccountService.create(createBankAccountDto.account_number);
  }

  @Get()
  async findAll() {
    return await this.bankAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bankAccountService.findOne(id);
  }

  @HttpCode(204)
  @Post('transfer')
  transfer(@Body() transferDto: TransferBankAccountDto) {
    return this.bankAccountService.transfer(
      transferDto.from,
      transferDto.to,
      transferDto.amount,
    );
  }
}
