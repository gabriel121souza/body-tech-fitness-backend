import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MeasureBodyService } from '../services/measureBody.service';
import { MeasureBody } from '../entities/measureBody.entity';

@Controller('meausures-body')
export class UserController {
  constructor(private readonly measureBodyService: MeasureBodyService) {}

  @Get()
  findAll() {
    return this.measureBodyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.measureBodyService.findOne(id);
  }

  @Post()
  create(@Body() user: MeasureBody) {
    return this.measureBodyService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<MeasureBody>) {
    return this.measureBodyService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.measureBodyService.delete(id);
  }
}
