import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableAddress1641752480217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  
    await queryRunner.createTable(new Table({
        name: "address",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name: "cep",
                    type: "varchar",
                    width: 10
                },
                {
                    name: "logradouro",
                    type: "varchar",
                    width: 100
                },
                {
                    name: "complemento",
                    type: "varchar",
                    width: 100,
                    isNullable: true
                },
                {
                    name: "bairro",
                    type: "varchar",
                    width: 100
                },
                {
                    name: "localidade",
                    type: "varchar",
                    width: 50
                },
                {
                    name: "uf",
                    type: "varchar",
                    width: 2
                },
                {
                    name: "ibge",
                    type: "int"
                },
                {
                    name: "gia",
                    type: "int",
                    width: 5,
                    isNullable: true
                },
                {
                    name: "ddd",
                    type: "varchar",
                    width: 4
                },
                {
                    name: "siafi",
                    type: "varchar",
                    width: 5
                },
                {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
                },
                {
                name: 'update_at',
                type: 'timestamp',
                default: 'now()'
                }
            ]
        }), true);
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
