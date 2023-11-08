import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 5000, nullable: false })
  sinopsis: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  director: string;

  @Column({ type: 'int', nullable: false })
  duracion: number;

  @CreateDateColumn({ name: 'fecha_Estreno'})
  fechaEstreno: Date;
}
