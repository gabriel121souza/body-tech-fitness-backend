import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('measure_body')
export class MeasureBody {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column('double')
  waist: number;

  @Column('double')
  hip: number;

  @Column('double')
  chest: number;

  @Column('double')
  rightArm: number;

  @Column('double')
  leftArm: number;

  @Column('double')
  rightForearm: number;

  @Column('double')
  leftForearm: number;

  @Column('double')
  rightThigh: number;

  @Column('double')
  leftThigh: number;

  @Column('double')
  rightCalf: number;

  @Column('double')
  leftCalf: number;

  @Column('double', { nullable: true })
  neck: number;

  @ManyToOne(() => User, (user) => user.measureBodies, { onDelete: 'CASCADE' })
  user: User;
}
