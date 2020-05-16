import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Tweet from './Tweet';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @Column()
  localizacao: string;

  @Column()
  site: string;

  @Column()
  dta_nascimento: string;

  @Column()
  password: string;

  @Column()
  avatar_id: string;

  @Column()
  avatar: string;

  @Column()
  capa: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(type => Tweet, tweet => tweet.owner)
  tweets: Tweet[];
}

export default User;
