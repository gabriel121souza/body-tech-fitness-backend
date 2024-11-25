import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MeasureBody } from './measureBody.entity'; 

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column()
  name: string;

  // Relacionamento OneToMany (um usuário pode ter várias medições)
  @OneToMany(() => MeasureBody, (measureBody) => measureBody.user)
  measureBodies: MeasureBody[];

  // Outros campos...
}
