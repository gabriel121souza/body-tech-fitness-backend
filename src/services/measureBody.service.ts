import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeasureBody } from 'src/entities/measureBody.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeasureBodyService {
  constructor(
    @InjectRepository(MeasureBody)
    private readonly measureBodyRepository: Repository<MeasureBody>,
  ) {}

  async findAll(): Promise<MeasureBody[]> {
    // Inclui a relação com 'user'
    return this.measureBodyRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<MeasureBody> {
    // Inclui a relação com 'user'
    return this.measureBodyRepository.findOne({
      where: { id },
      relations: ['user'], // Garante que o usuário seja carregado junto
    });
  }

  async create(measureBody: MeasureBody): Promise<MeasureBody> {
    return this.measureBodyRepository.save(measureBody);
  }

  async update(id: number, measureBody: Partial<MeasureBody>): Promise<MeasureBody> {
    await this.measureBodyRepository.update(id, measureBody);
    return this.findOne(id); // Carrega o registro atualizado com a relação
  }

  async delete(id: number): Promise<void> {
    await this.measureBodyRepository.delete(id);
  }
}
