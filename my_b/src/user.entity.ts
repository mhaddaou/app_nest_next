import { Injectable } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true, nullable: false})
    username: string;

    @Column({unique: true, nullable: false})
    email: string;
}