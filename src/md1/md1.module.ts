import { Module } from '@nestjs/common';
import { Md1Resolver } from './md1.resolver';
import { Md1Service } from './md1.service';

@Module({
  providers: [Md1Resolver, Md1Service]
})
export class Md1Module {}
