import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

/**
 * Estrutura da tabela do banco de dados
 */

@Entity('address')
class Address {

  @PrimaryGeneratedColumn('increment')
  id:number;
 
  @Column()
  cep:string; 

  @Column()
  logradouro:string

  @Column()
  complemento:string

  @Column()
  bairro:string

  @Column()
  localidade:string

  @Column()
  uf:string

  @Column()
  ibge:number

  @Column()
  gia:number

  @Column()
  ddd:number

  @Column()
  siafi:number

  @CreateDateColumn()
  created_at:Date;
  
  @UpdateDateColumn()
  update_at:Date;

}


export { Address }