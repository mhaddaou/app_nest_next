import { Injectable } from "@nestjs/common";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserService } from "./user.service";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({unique: true, nullable: false})
    username: string;

    @BeforeInsert()
    async addNewId(){
        this.id = uuidv4();
    }
}